import { expect } from 'chai';
import { sellABook, findAuthorByGenre, createInventory } from '../brewer-digital.js';

describe('createInventory', function () {
    it('should create a bookstore inventory', function () {
        const bookstoreInventory = [
            createInventory("book1", "kim", "science", 3),
            createInventory("book2", "joel", "mystery", 2),
            createInventory("book3", "spencer", "cooking", 4)
        ]
        expect(bookstoreInventory).to.have.length(3)
        expect(bookstoreInventory[0].title).to.equal("book1")
        expect(bookstoreInventory[0]).to.deep.equal({
            title: "book1",
            author: "kim",
            genre: "science",
            price: 3
        })
    })
    it('should return an error message when required fields are missing during inventory creation', function () {
        const incompleteInformation = createInventory("book1", "", "scinece", 3)
        expect(incompleteInformation).to.equal("Incomplete book information. Please provide missing information.")
    })
    it('should return an error message when an incorrect data type is provided during inventory creation', function () {
        const incorrectDataType = createInventory(1, 7, 9, "3")
        expect(incorrectDataType).to.equal("Incorrect book information. Please correct the incorrect information")
    })
});