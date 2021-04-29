import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const dbconfig = async () => {
    return open({
        filename: 'database.db',
        driver: sqlite3.Database
    })
}

export { dbconfig }