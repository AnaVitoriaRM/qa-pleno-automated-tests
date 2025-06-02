describe('Login com fallback para cadastro', () => {

  const email = 'teste@gmail.com';
  const senha = '123';
  const nome = 'teste';

  it('Deve logar ou se cadastrar caso usuário não exista', () => {

    // Acessa a página inicial de login
    cy.visit('/');

    // Preenche o campo de e-mail
    cy.get('input[name=email]').type(email);

    // Preenche o campo de senha
    cy.get('input[name=password]').type(senha);

    // Clica no botão "Entrar"
    cy.get('button[type=submit]').click();

    // Aguarda o redirecionamento acontecer (até 5 segundos)
    cy.wait(3000);

    // Verifica a URL após o clique
    cy.location('pathname', { timeout: 10000 }).then((pathname) => {

      if (pathname.includes('/login')) {
        // Login falhou, segue para cadastro
        cy.log('Usuário não encontrado. Redirecionando para cadastro.');

        // Vai para a tela de cadastro
        cy.contains('Cadastre-se').click();

        // Preenche os dados de cadastro
        cy.get('input[name=nome]').type(nome);
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type(senha);
        cy.get('select[name=administrador]').select('true');

        // Envia o formulário
        cy.get('button[type=submit]').click();

        // Volta para a tela de login
        cy.visit('/');

        // Realiza o login com os dados cadastrados
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type(senha);
        cy.get('button[type=submit]').click();

        // Verifica se logou com sucesso
        cy.contains('Produtos').should('be.visible');

      } else {
        // Login funcionou direto
        cy.contains('Produtos').should('be.visible');
      }
    });

  });
});
