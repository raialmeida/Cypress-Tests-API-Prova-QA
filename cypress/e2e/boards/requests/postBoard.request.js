/// <reference types="cypress" />

export function postBoard(nameBoard) {
    return cy.request({
        method: 'POST',
        url: 'boards/',
        qs: {
            name: nameBoard,
            key: Cypress.env('apiKey'),
            token: Cypress.env('apiToken')
        },
        failOnStatusCode: false,
    })
}