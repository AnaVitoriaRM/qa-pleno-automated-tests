import requests

# Teste pra verificar se a listagem de produtos tá funcionando
def test_list_products():
    # GET pra pegar a lista de produtos
    response = requests.get("https://serverest.dev/produtos")

    # Confirma se deu tudo certo (resposta 200)
    assert response.status_code == 200

    # Verifica se a chave "produtos" veio no JSON
    assert "produtos" in response.json()

    # Confirma que o conteúdo de "produtos" realmente é uma lista
    assert isinstance(response.json()["produtos"], list)
