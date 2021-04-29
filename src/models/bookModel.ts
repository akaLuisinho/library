import { dbconfig } from '../db/config'
import { v4 as uuid } from 'uuid';

async function addBook(bookData: any) {
    const db = await dbconfig()
    
    await db.exec(`
    INSERT INTO Books(name, author, theme, year) 
    VALUES ("${bookData.bookName}", "${bookData.bookAuthor}", "${bookData.bookTheme}", ${bookData.bookYear})
    `)

    await db.close()
}

export { addBook as addBookModel }