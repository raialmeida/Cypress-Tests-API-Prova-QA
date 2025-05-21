/// <reference types="cypress" />

export function postCard(idLista, nameCard) {
    return cy.request({
        method: 'POST',
        url: 'cards/',
        qs: {
            idList: idLista,
            name: nameCard,
            key: Cypress.env('apiKey'),
            token: Cypress.env('apiToken')
        },
        failOnStatusCode: false,
    })
}