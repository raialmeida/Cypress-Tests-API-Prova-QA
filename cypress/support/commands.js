Cypress.Commands.add('cadastrarBoard', () => {
    return cy.request({
        method: 'POST',
        url: 'boards/',
        qs: {
            name: 'Board Automação',
            key: Cypress.env('apiKey'),
            token: Cypress.env('apiToken')
        },
        failOnStatusCode: false,
    }).then((response) => {
        cy.wrap(response.body.id).as('idBoard')
    })
})

Cypress.Commands.add('cadastrarLista', () => {
    return cy.cadastrarBoard().then((idBoard) => {
        cy.request({
            method: 'POST',
            url: `boards/${idBoard}/lists`,
            qs: {
                name: 'Lista Automação',
                key: Cypress.env('apiKey'),
                token: Cypress.env('apiToken')
            },
            failOnStatusCode: false,
        }).then((response) => {
            cy.wrap(response.body.id).as('idList')
        })
    })
})

Cypress.Commands.add('cadastrarCard', () => {
    return cy.cadastrarLista().then((idLista) => {
        cy.request({
            method: 'POST',
            url: 'cards/',
            qs: {
                idList: idLista,
                name: 'Card Automação',
                key: Cypress.env('apiKey'),
                token: Cypress.env('apiToken')
            },
            failOnStatusCode: false,
        }).then((response) => {
            cy.wrap(response.body.id).as('idCard')
        })
    })
})