/// <reference types="cypress" />

export function deleteBoard(idBoard) {
    return cy.request({
        method: 'DELETE',
        url: `boards/${idBoard}`,
        qs: {
            key: Cypress.env('apiKey'),
            token: Cypress.env('apiToken')
        },
        failOnStatusCode: false,
    })
}