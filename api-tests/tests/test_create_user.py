import requests

import time

# Teste pra criar um usuário novo
def test_create_user():
    # Cria os dados do usuário, e coloca o timestamp no e-mail pra não repetir
    data = {
        "nome": "QA Pleno",
        "email": f"qa{int(time.time())}@mail.com",
        "password": "senha123",
        "administrador": "true"
    }

    # Chama POST pra criar o usuário
    response = requests.post("https://serverest.dev/usuarios", json=data)

    # Confirma se a resposta foi 201 (OK)
    assert response.status_code == 201

    # Verifica se veio a mensagem de confirmação no retorno
    assert "message" in response.json()
