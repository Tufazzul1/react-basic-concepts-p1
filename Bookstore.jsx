
import Book from "./src/Book"
export default function Bookstore({books}) {
    return(
        <div className="book-store">
            <h3>Books: {books.length}</h3>
            {
                books.map(book => <Book book={book}></Book>)
            }
        </div>
    )
}