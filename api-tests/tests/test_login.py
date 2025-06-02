import requests

def test_login_user():
    # Definindo os dados do usuário que vou usar no teste
    user_data = {
        "nome": "Usuário Teste",
        "email": "usuario@email.com",
        "password": "senha123",
        "administrador": "true"
    }

    # Tento criar o usuário na API (se já existir, continua)
    requests.post("https://serverest.dev/usuarios", json=user_data)

    # Prepara os dados pra tentar fazer login com esse usuário
    login_data = {
        "email": "usuario@email.com",
        "password": "senha123"
    }

    # Faz a requisição de login
    response = requests.post("https://serverest.dev/login", json=login_data)

    # Verifica se o login deu certo (status 200)
    assert response.status_code == 200

    # Confere se a API me mandou o token de volta
    assert "authorization" in response.json()
