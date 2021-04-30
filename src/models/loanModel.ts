import { dbconfig } from '../db/config'

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
export { addLoan }