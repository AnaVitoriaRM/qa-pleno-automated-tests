// Adiciona um comando customizado chamado "loginViaAPI"
Cypress.Commands.add('loginViaAPI', () => {
  // Faz uma requisição POST para a API de login
  cy.request('POST', 'https://serverest.dev/login', {
    email: 'usuario@email.com',
    password: 'senha123'
  }).then((response) => {
    // Armazena o token no localStorage, simulando login
    window.localStorage.setItem('token', response.body.authorization)
  })
})
