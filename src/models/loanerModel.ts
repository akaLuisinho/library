import { dbconfig } from '../db/config'

async function addLoaner(loanerData: any) {
    const db = await dbconfig()
    
    await db.exec(`
    INSERT INTO loaners(loanerName, phone, address, loaning) 
    VALUES ("${loanerData.loanerName}", ${loanerData.loanerPhone}, "${loanerData.loanerAddress}", false)
    `)

    await db.close()
}

async function getLoaners() {
    const db = await dbconfig()
    
    const loanersList = await db.all(`SELECT * FROM Loaners WHERE loaning = false`)

    await db.close()
    
    return loanersList
}

export { addLoaner as addLoanerModel, getLoaners }