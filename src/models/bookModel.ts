import { dbconfig } from '../db/config'

async function addBook(bookData: any) {
    const db = await dbconfig()
    
    await db.exec(`
    INSERT INTO Books(name, author, theme, year) 
    VALUES ("${bookData.bookName}", "${bookData.bookAuthor}", "${bookData.bookTheme}", ${bookData.bookYear})
    `)

    await db.close()
}

async function getBooks() {
    const db = await dbconfig()
    
    const bookList = await db.all(`SELECT * FROM Books`)

    await db.close()

    return bookList
}

export { addBook as addBookModel, getBooks }