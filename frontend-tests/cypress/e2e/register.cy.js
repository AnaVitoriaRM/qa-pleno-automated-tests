describe('Cadastro de usuários comuns e administradores', () => {

  const baseUrlCadastro = 'https://front.serverest.dev/cadastrarusuarios';

  it('Deve cadastrar um usuário comum e depois um administrador', () => {
    // Visita a tela de cadastro de usuários
    cy.visit(baseUrlCadastro);

    // === CADASTRO DO USUÁRIO COMUM ===

    cy.get('input[name=nome]').type(`usuario_comum_${Date.now()}`);
    cy.get('input[name=email]').type(`comum${Date.now()}@mail.com`);
    cy.get('input[name=password]').type('123');

    // Clica no botão "Cadastrar"
    cy.get('button[type=submit]').click();

    // Verifica mensagem de sucesso
    cy.contains('Cadastro realizado com sucesso').should('be.visible');

    // === AGUARDA E VOLTA PARA TELA DE CADASTRO ===

    cy.wait(1000); // aguarda brevemente antes de continuar
    cy.visit(baseUrlCadastro);

    // === CADASTRO DO USUÁRIO ADMINISTRADOR ===

    cy.get('input[name=nome]').type(`usuario_admin_${Date.now()}`);
    cy.get('input[name=email]').type(`admin${Date.now()}@mail.com`);
    cy.get('input[name=password]').type('123');

    // Seleciona "administrador"
    cy.get('#administrador').check()

    // Clica no botão "Cadastrar"
    cy.get('button[type=submit]').click();

    // Verifica mensagem de sucesso
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  });

});
