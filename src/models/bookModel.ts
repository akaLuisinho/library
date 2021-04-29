import { dbconfig } from '../db/config'

async function addBook(bookData: any) {
    const db = await dbconfig()
    
    await db.exec(`
    INSERT INTO Books(name, author, theme, year) 
    VALUES ("${bookData.bookName}", "${bookData.bookAuthor}", "${bookData.bookTheme}", ${bookData.bookYear})
    `)

    await db.close()
}

export { addBook as addBookModel }