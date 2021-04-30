import { dbconfig } from '../db/config'

async function getLoans() { 
    let pairLoanerBook = []
    const db = await dbconfig()

    const loans = await db.all(`SELECT * FROM Loan`)
    for(const loan of loans) {
        const loaner = await db.get(`SELECT * FROM Loaners WHERE id = ${loan.loanerId}`)
        const book = await db.get(`SELECT * FROM Books WHERE id = ${loan.bookId}`)
        const expiration = await db.get(`SELECT expiration FROM Loan WHERE loanerId = ${loan.loanerId}`)
        pairLoanerBook.push(loaner, book, expiration)
    }

    await db.close()    
    
    return pairLoanerBook
}
async function addLoan(book: string, loaner: string) {

    const month = 2629800000
    const expiration = Date.now() + month

    const db = await dbconfig()

    const bookData = await db.get(`SELECT * FROM Books WHERE name = "${book}"`)
    const loanerData = await db.get(`SELECT * FROM Loaners WHERE name = "${loaner}"`)
    
    await db.exec(`
    INSERT INTO Loan(loanerId, bookId, expiration)
    VALUES (${loanerData.id}, ${bookData.id}, "${expiration}")
    `)

    await db.close()
}
export { getLoans, addLoan }