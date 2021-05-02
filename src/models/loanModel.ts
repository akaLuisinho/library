import { dbconfig } from '../db/config'

async function getLoans() { 
    let pairLoanerBook = []
    const db = await dbconfig()

    const loans = await db.all(`SELECT * FROM Loan`)
    for(const loan of loans) {
        const loaner = await db.get(`SELECT * FROM Loaners WHERE id = ${loan.loanerId}`)
        const book = await db.get(`SELECT * FROM Books WHERE id = ${loan.bookId}`)
        const calculateExpiration = Math.floor((loan.loanDate - Date.now()) / (1000*60*60*24))
        const loanData = {
            ...loan,
            ...loaner,
            ...book,
            loanDate: calculateExpiration,
            id: loan.id
        }
        pairLoanerBook.push(loanData)
    }
    await db.close()    

    return pairLoanerBook
}
async function addLoan(book: string, loaner: string) {

    const month = 2629800000
    const loanDate = Date.now() + month

    const db = await dbconfig()

    const bookData = await db.get(`SELECT * FROM Books WHERE bookName = "${book}"`)
    const loanerData = await db.get(`SELECT * FROM Loaners WHERE loanerName = "${loaner}"`)
    
    await db.exec(`
    INSERT INTO Loan(loanerId, bookId, loanDate)
    VALUES (${loanerData.id}, ${bookData.id}, "${loanDate}")
    `)

    await db.exec(`UPDATE Loaners SET loaning = true WHERE id = ${loanerData.id}`)
    await db.exec(`UPDATE Books SET loaned = true WHERE id = ${bookData.id}`)

    await db.close()
}

async function returnBook(id: number) {
    const db = await dbconfig()
    const loanData = await db.get(`SELECT * FROM Loan WHERE id = ${id}`)
    await db.exec(`UPDATE Books SET loaned = false WHERE id = ${loanData.bookId}`)
    await db.exec(`UPDATE Loaners SET loaning = false WHERE id = ${loanData.loanerId}`)

    await db.exec(`DELETE FROM Loan WHERE id = ${id}`)
    await db.close()

}
export { getLoans, addLoan, returnBook }