import { dbconfig } from './config'

const initDb = {
    async init() {
        const db = await dbconfig()

        await db.exec(`CREATE TABLE Loaners(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            loanerName varchar(200),
            phone int(20),
            address varchar(300),
            loaning boolean
        )`)

        await db.exec(`CREATE TABLE Books(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            bookName varchar(200),
            author varchar(200),
            theme varchar(200),
            year int(4),
            loaned boolean
            )`)

        await db.exec(`CREATE TABLE Loan(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            loanerId int,
            bookId int,
            loanDate date,
            FOREIGN KEY (loanerId) REFERENCES Loaners(id),
            FOREIGN KEY (bookId) REFERENCES Books(id)
        )`)
    }
}

initDb.init()