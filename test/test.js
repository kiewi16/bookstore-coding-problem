import { expect } from 'chai';
import { sellABook, findAuthorByGenre, createInventory } from '../brewer-digital.js';

describe('createInventory', function () {
    it('should create a bookstore inventory', function () {
        const bookstoreInventory = [
            createInventory("book1", "kim", "science", 3),
            createInventory("book2", "joel", "mystery", 2),
            createInventory("book3", "spencer", "cooking", 4)
        ];

        expect(bookstoreInventory).to.have.length(3);
        expect(bookstoreInventory[0].title).to.equal("book1");
        expect(bookstoreInventory[0]).to.deep.equal({
            title: "book1",
            author: "kim",
            genre: "science",
            price: 3
        });
    });

    it('should return an error message when required fields are missing during inventory creation', function () {
        const incompleteInformation = createInventory("book1", "", "scinece", 3)

        expect(incompleteInformation).to.equal("Incomplete book information. Please provide missing information.");
    })

    it('should return an error message when an incorrect data type is provided during inventory creation', function () {
        const incorrectDataType = createInventory(1, 7, 9, "3");
        expect(incorrectDataType).to.equal("Incorrect book information. Please correct the incorrect information");
    });
});

describe('sellABook', function () {
    let bookstoreInventory

    beforeEach(function () {
        bookstoreInventory = [
            createInventory("book1", "kim", "science", 3),
            createInventory("book2", "joel", "mystery", 2),
            createInventory("book3", "spencer", "cooking", 4)
        ]
    });

    it('should provide the total cost when the customer purchases an in-stock book', function () {
        const booksIWantToBuy = (["book2"]);
        const totalCost = sellABook(booksIWantToBuy, bookstoreInventory);

        expect(totalCost).to.equal("$2.00");
    });

    it('should provide the total cost when the customer purchases two in-stock books', function () {
        const booksIWantToBuy2 = (["book1", "book3"]);
        const totalCost2 = sellABook(booksIWantToBuy2, bookstoreInventory);

        expect(totalCost2).to.equal("$7.00");
    });

    it('should return a message if the customer purchases a book that isn/t in-stock', function () {
        const booksIWantToBuy3 = (["book4"]);
        const bookNotInStock = sellABook(booksIWantToBuy3, bookstoreInventory);

        expect(bookNotInStock).to.equal('Unfortunately this book is currently out-of-stock. Please try back another time.')
    });
});

describe('findAuthorByGenre', function () {
    let bookstoreInventory

    beforeEach(function () {
        bookstoreInventory = [
            createInventory("book1", "kim", "science", 3),
            createInventory("book2", "joel", "science", 2),
            createInventory("book3", "spencer", "cooking", 4)
        ]
    });

    it('should return an author that matches a specific genere', function () {
        const genre = "cooking";
        const matchingAuthor = findAuthorByGenre(genre, bookstoreInventory);

        expect(matchingAuthor).to.equal("spencer")
    })

    it('should return any authors that match a specific genre', function () {
        const genre2 = "science";
        const matchingAuthors2 = findAuthorByGenre(genre2, bookstoreInventory);

        expect(matchingAuthors2).to.deep.equal(["kim", "joel"])
    });

    it('should return a message if no authors match a specific genre', function () {
        const genre3 = "health";
        const matchingAuthors3 = findAuthorByGenre(genre3, bookstoreInventory)

        expect(matchingAuthors3).to.equal("Sorry, there are no authors matching this genre.")
    })

    it('should return any authors that match a specific genre even when the provided genre is all in uppercase', function () {
        const genre4 = "SCIENCE";
        const matchingAuthors4 = findAuthorByGenre(genre4, bookstoreInventory);

        expect(matchingAuthors4).to.deep.equal(["kim", "joel"]);
    });
}); 