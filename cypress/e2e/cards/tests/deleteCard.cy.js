/// <reference types="cypress" />

import * as request from '../requests/deleteCard.request'

describe('DELETE - Validar endpoint cards/', () => {

    it('Validar a exclusão do card com sucesso', { tags: '@smoke' }, () => {
        cy.cadastrarCard().then((idCard) => {
            request.deleteCard(idCard).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).is.not.empty
            })
        })
    })

    it('Validar a exclusão do card com id inválido', () => {
        request.deleteCard('245454').then((response) => {
            expect(response.body).to.equal('invalid id')
            expect(response.status).to.eq(400)
            expect(response.body).is.not.empty
        })
    })
})
