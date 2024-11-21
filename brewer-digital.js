// online bookstore

let bookstoreInventory = [
    {
        title: "book1",
        author: "kim",
        genre: "science",
        price: 3
    },
    {
        title: "book2",
        author: "joel",
        genre: "mystery",
        price: 2
    },
    {
        title: "book3",
        author: "spencer",
        genre: "cooking",
        price: 4
    },
    {
        title: "book4",
        author: "greg",
        genre: "health",
        price: 10
    }
]

let spencersBooks = ["book1", "book2", "book3"]
let kimsBooks = ["book1", "book4"]
let joelsBooks = ["book2", "book3"]

function sellABook(booksIWantToBuy) {
    let totalCost = bookstoreInventory.reduce((acc, book) => {
        let matchingBook = booksIWantToBuy.find(bookName => book.title === bookName)
        if (matchingBook) {
            acc += book.price
        }
        return acc
    }, 0)
    return `$${totalCost.toFixed(2)}`
}
console.log(sellABook(spencersBooks))
console.log(sellABook(kimsBooks))
console.log(sellABook(joelsBooks))

function findAuthorByGenre(genre) {
    let book2 = bookstoreInventory.find(book => {
        return book.genre === genre
    })
    return `The author's name is ${book2.author}`
}
console.log(findAuthorByGenre("mystery"))
console.log(findAuthorByGenre("cooking"))