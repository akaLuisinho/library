import { dbconfig } from './config'

const initDb = {
    async init() {
        const db = await dbconfig()

        await db.exec(`CREATE TABLE Loaners(
            id uuid PRIMARY_KEY,
            name varchar(200),
            phone int(20),
            address varchar(300)
        )`)

        await db.exec(`CREATE TABLE Books(
            id uuid PRIMARY_KEY,
            name varchar(200),
            author varchar(200),
            theme varchar(200),
            year int(4)
            )`)

        await db.exec(`CREATE TABLE Loan(
            id uuid PRIMARY_KEY,
            loanerId uuid,
            bookId uuid,
            expiration date,
            FOREIGN KEY (loanerId) REFERENCES Loaners(id),
            FOREIGN KEY (bookId) REFERENCES Books(id)
        )`)
    }
}

initDb.init()