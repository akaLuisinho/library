import { dbconfig } from '../db/config'

async function addLoaner(loanerData: any) {
    const db = await dbconfig()
    
    await db.exec(`
    INSERT INTO loaners(name, phone, address) 
    VALUES ("${loanerData.loanerName}", ${loanerData.loanerPhone}, "${loanerData.loanerAddress}")
    `)

    await db.close()
}

export { addLoaner as addLoanerModel }