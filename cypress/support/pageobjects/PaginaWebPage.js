/// <reference types="Cypress" />

import PaginaWebElements from '../elements/PaginaWebElements'
const paginaWebElements = new PaginaWebElements
const url = Cypress.config("baseUrl")

class PaginaWebPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarMenuQuemSomos() {
        cy.get(paginaWebElements.menuQuemSomos()).click()
    }

    clicarBotaoContato() {
        cy.get(paginaWebElements.contato()).click()
    }
  
    // Verifica se o botão tem o texto "Esqueceu sua senha?"
    visualizarMensagens(table) {
        table.hashes().forEach(row => {
            const index = row.index
            cy.xpath(paginaWebElements.valores(index)).should('have.text', row.mensagem)

        })
    }

    validaTextoFone(fone) {
        cy.get(paginaWebElements.fone()).should('have.text', fone)
    }

    validaTextoEmail(email) {
        cy.get(paginaWebElements.email()).should('have.text', email)
    }
}

export default PaginaWebPage;