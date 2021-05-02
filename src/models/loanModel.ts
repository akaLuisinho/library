import { dbconfig } from '../db/config'

async function getLoans() { 
    const db = await dbconfig()

    const loans = await db.all(`SELECT * FROM Loan`)
    
    await db.close()    

    return loans
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