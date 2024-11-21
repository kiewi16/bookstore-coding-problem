function createInventory(title, author, genre, price) {
    if (!title || !author || !genre || price === null) {
        return `Incomplete book information. Please provide missing information.`
    } else if (typeof title !== "string" || typeof author !== "string" || typeof genre !== "string" || typeof price !== "number") {
        return `Incorrect book information. Please correct the incorrect information`
    } else {
        const bookstoreInventory = {
            title: title,
            author: author,
            genre: genre,
            price: price,
        }
        return bookstoreInventory
    }
}

function sellABook(booksIWantToBuy, bookstoreInventory) {
    let totalCost = bookstoreInventory.reduce((acc, book) => {
        let matchingBook = booksIWantToBuy.find(bookName => book.title === bookName)
        if (matchingBook) {
            acc += book.price
        }
        return acc
    }, 0)
    if (totalCost.toFixed(2) > 0) {
        return `$${totalCost.toFixed(2)}`
    } else {
        return `Unfortunately this book is currently out-of-stock. Please try back another time.`
    }
}

function findAuthorByGenre(genre, bookstoreInventory) {
    let matchingBooks = bookstoreInventory.filter(book => book.genre.toLowerCase() === genre.toLowerCase())
    if (matchingBooks.length > 1) {
        return matchingBooks.map(matchingBook => matchingBook.author)
    } else if (matchingBooks.length === 1) {
        return matchingBooks[0].author
    } else {
        return `Sorry, there are no authors matching this genre.`
    }
}

export { createInventory, sellABook, findAuthorByGenre }