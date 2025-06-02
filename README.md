## 🔪 Projeto de Testes Automatizados – API e Front-End

Este repositório contém dois conjuntos de testes automatizados:

* `api-tests`: testes em Python com `pytest` que validam endpoints da API do [Serverest.dev](https://serverest.dev/).
* `frontend-tests`: testes end-to-end com `Cypress` para simular o comportamento de um usuário no front-end.

---

## 📁 Estrutura do Projeto

```
qa-pleno-automated-tests/
│
├── api-tests/
│   ├── tests/
│   │   ├── test_create_user.py
│   │   ├── test_list_products.py
│   │   └── test_login.py
│   └── requirements.txt
│
└── frontend-tests/
    ├── cypress/
    │   └── e2e/
    │       └── fluxo_completo.cy.js
    ├── cypress.config.js
    └── package.json
```

---

## 🗏️ Pré-requisitos

### Para `api-tests`:

* Python 3.10+
* `pip` instalado

### Para `frontend-tests`:

* Node.js (versão 18 ou superior)
* `npm` ou `yarn`

---

## ⚙️ Instalação

### 📦 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/qa-pleno-automated-tests.git
cd qa-pleno-automated-tests
```

---

### 🔪 2. Instalar dependências dos testes de API

```bash
cd api-tests
pip install -r requirements.txt
```

> O arquivo `requirements.txt` contém:

```
pytest
requests
```

---

### 🌐 3. Instalar dependências dos testes Front-end

```bash
cd ../frontend-tests
npm install
```

---

## 🚀 Execução dos Testes

### ▶️ Rodar testes de API

```bash
cd api-tests
pytest
```

> Os testes incluirão:

* Criação de usuário
* Login
* Lista de produtos

Saída esperada:

```
collected 3 items

test_create_user.py::test_create_user PASSED
test_list_products.py::test_list_products PASSED
test_login.py::test_login_user PASSED
```

---

### ▶️ Rodar testes de Front-end (Cypress)

```bash
cd ../frontend-tests
npx cypress open
```

> Isso abrirá a interface visual do Cypress. Basta clicar nos arquivos `register.cy.js, login.cy.js e add-to-cart.cy.js` para rodar os testes no navegador.

Ou, para rodar em modo headless (sem interface):

```bash
npx cypress run
```

---

## 📌 Observações

* A URL usada para os testes (`https://front.serverest.dev`) precisa estar disponível no momento da execução.
* O Cypress simula o uso real do sistema, então o front-end precisa estar carregado corretamente.

---

## 📨 Contato

Dúvidas ou sugestões? Fique à vontade para abrir uma *issue* ou enviar um pull request!
Responsável: **Ana Vitória Matos**
