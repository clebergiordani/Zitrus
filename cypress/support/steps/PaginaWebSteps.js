/* global Given, Then, When */

import PaginaWebPage from '../pageobjects/PaginaWebPage'
const paginaWEebPage = new PaginaWebPage

Given("acesso o site Zitrus", () => {
    paginaWEebPage.acessarSite();
})

When("acessar a pagina Quem Somos", () => {
    paginaWEebPage.clicarMenuQuemSomos();
})

Then("devo visualizar os seguintes pilares da empresa", (table) => {
    paginaWEebPage.visualizarMensagens(table);
})

When("acessar o canal de contato pelo botao", () => {
    paginaWEebPage.clicarBotaoContato();
})

Then("será exibido o Telefone: {string}", fone => {

    paginaWEebPage.validaTextoFone(fone);
})

Then("será exibido o Email: {string}", email => {

    paginaWEebPage.validaTextoEmail(email);
})