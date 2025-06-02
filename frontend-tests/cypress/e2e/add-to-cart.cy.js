// Descreve o teste que cobre todo o fluxo: login, cadastro (se necessário) e adicionar produtos à lista
describe('Fluxo completo de login, cadastro e adição à lista', () => {
  // Dados fixos pro teste
  const email = 'teste@gmail.com';
  const senha = '123';
  const nome = 'teste';

  it('Deve logar ou cadastrar e executar os 3 fluxos de adicionar à lista', () => {
    // Acessa a página inicial do sistema
    cy.visit('https://front.serverest.dev/');
    cy.wait(1000); // espera pra garantir que a página carregou certo

    // Tenta fazer login com os dados definidos acima
    cy.get('input[name=email]').type(email);
    cy.get('input[name=password]').type(senha);
    cy.get('button[type=submit]').click();

    // Se der erro de login, significa que o usuário ainda não existe, então já faz o cadastro
    cy.get('body').then(($body) => {
      if ($body.find('.Toastify').text().includes('Email e/ou senha inválidos')) {
        // Vai pra tela de cadastro
        cy.contains('Cadastre-se').click();
        cy.wait(1000);

        // Preenche os campos de cadastro
        cy.get('input[data-testid="nome"]').type(nome);
        cy.get('input[data-testid="email"]').type(email);
        cy.get('input[data-testid="password"]').type(senha);
        cy.get('button[data-testid="cadastrar"]').click();

        cy.wait(2000); // espera um pouco depois de cadastrar
        cy.contains('Adicionar à lista'); // garante que chegou na home
      }
    });

    // === Fluxo 1: Adiciona o primeiro item diretamente da home ===
    cy.get('button[data-testid="adicionarNaLista"]').first().click();
    cy.wait(1500); // espera a página carregar
    cy.contains('Página Inicial').click(); // volta pra home
    cy.wait(1500);

    // === Fluxo 2: Clica na imagem do produto e depois adiciona à lista ===
    cy.get('img.imagem').first().click();
    cy.wait(1000);
    cy.get('button[data-testid="adicionarNaLista"]').first().click();
    cy.wait(1500);
    cy.contains('Página Inicial').click();
    cy.wait(1500);

    // === Fluxo 3: Clica em "Detalhes" do produto e adiciona à lista ===
    cy.contains('Detalhes').first().click();
    cy.wait(1000);
    cy.get('button[data-testid="adicionarNaLista"]').first().click();
    cy.wait(1500);
  });
});
