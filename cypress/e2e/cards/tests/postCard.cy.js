/// <reference types="cypress" />

import * as request from '../requests/postCard.request'
import * as schema from '../schema/postCardSchema'

describe('POST - Validar endpoint cards/', () => {

    it('Validar criação de card com sucesso', { tags: '@smoke' }, () => {
        cy.cadastrarLista().then((idList) => {
            request.postCard(idList, 'Card Automação').then((response) => {
                expect(response.body.idList).to.equal(idList)
                expect(response.body.name).to.equal('Card Automação')
                expect(response.status).to.eq(200)
                expect(response.body).is.not.empty
            })
        })
    })

    it('Validar schema response da requisição cadastro de card', () => {
        cy.cadastrarLista().then((idList) => {
            request.postCard(idList).then((response) => {
                return schema.CardSchema.validateAsync(response.body)
            })
        })
    })
})
