/// <reference types="cypress" />

import * as request from '../requests/postBoard.request'
import * as schema from '../schema/postBoardSchema'

describe('POST - Validar endpoint boards/', () => {

    it('Validar criação do board com sucesso', { tags: '@smoke' }, () => {
        request.postBoard('BoardTeste').then((response) => {
            expect(response.body.name).to.equal('BoardTeste')
            expect(response.status).to.eq(200)
            expect(response.body).is.not.empty
        })
    })

    it('Validar schema response da requisiçõa cadastro de boards', () => {
        request.postBoard('BoardTeste').then((response) => {
            return schema.boardSchema.validateAsync(response.body)
        })
    })
})
