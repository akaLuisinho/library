import { dbconfig } from '../db/config'

async function getLoaners() {
    const db = await dbconfig()
    
    const loanersList = await db.all(`SELECT * FROM Loaners WHERE loaning = false`)

    await db.close()
    
    return loanersList
}

async function addLoaner(loanerData: any) {
    const db = await dbconfig()
    
    await db.exec(`
    INSERT INTO loaners(loanerName, phone, address, loaning) 
    VALUES ("${loanerData.loanerName}", ${loanerData.loanerPhone}, "${loanerData.loanerAddress}", false)
    `)

    await db.close()
}

async function getLoanerById(id: number) {
    const db = await dbconfig()

    const loaner = await db.get(`SELECT * FROM Loaners WHERE id = ${id}`)

    await db.close()

    return loaner
}

async function updateLoaner(id: number, newData: any) {
    const db = await dbconfig()
    
    await db.exec(`
    UPDATE Loaners SET
    loanerName = "${newData.loanerName}",
    address = "${newData.address}",
    phone = ${newData.phone}
    WHERE id = ${id}
    `)

    await db.close()
}

async function deleteLoaner(id: number) {
    const db = await dbconfig()

    await db.exec(`DELETE FROM Loaners WHERE id = ${id}`)
    
    await db.close()
}
export { addLoaner as addLoanerModel, deleteLoaner as deleteLoanerModel, getLoaners, getLoanerById, updateLoaner }