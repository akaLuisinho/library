import { dbconfig } from '../db/config'

async function getBooks() {
    const db = await dbconfig()
    
    const bookList = await db.all(`SELECT * FROM Books WHERE loaned = false`)

    await db.close()

    return bookList 
}

async function addBook(bookData: any) {
    const db = await dbconfig()
    
    await db.exec(`
    INSERT INTO Books(bookName, author, theme, year, loaned) 
    VALUES ("${bookData.bookName}", "${bookData.bookAuthor}", "${bookData.bookTheme}", ${bookData.bookYear}, false)
    `)

    await db.close()
}

async function getBookById(id: number) {
    const db = await dbconfig()
    
    const book = await db.get(`SELECT * FROM Books WHERE id = ${id}`)

    await db.close()

    return book
}

async function updateBook(id: number, newData: any) {
    const db = await dbconfig()
    
    await db.exec(`
    UPDATE Books SET
    bookName = "${newData.bookName}",
    author = "${newData.author}",
    theme = "${newData.theme}", 
    year = ${newData.year}
    WHERE id = ${id}
    `)

    await db.close()
}

async function deleteBook(id: number) {
    const db = await dbconfig()
    
    await db.exec(`DELETE FROM Books WHERE id = ${id}`)

    await db.close()
}
export { addBook as addBookModel, getBooks, getBookById, updateBook, deleteBook as deleteBookModel }