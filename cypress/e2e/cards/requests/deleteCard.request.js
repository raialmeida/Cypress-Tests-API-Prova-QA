/// <reference types="cypress" />

export function deleteCard(idCard) {
    return cy.request({
        method: 'DELETE',
        url: `cards/${idCard}`,
        qs: {
            key: Cypress.env('apiKey'),
            token: Cypress.env('apiToken')
        },
        failOnStatusCode: false,
    })
}