/// <reference types="cypress" />

import * as request from '../requests/deleteBoard.request'

describe('DELETE - Validar endpoint boards/', { tags: '@smoke' }, () => {

    it('Validar a exclusão do board com sucesso', () => {
        cy.cadastrarBoard().then((idBoard) => {
            request.deleteBoard(idBoard).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).is.not.empty
            })
        })
    })

    it('Validar a exclusão do board com id inválido', () => {
        request.deleteBoard('245454').then((response) => {
            expect(response.body).to.equal('invalid id')
            expect(response.status).to.eq(400)
            expect(response.body).is.not.empty
        })
    })
})
