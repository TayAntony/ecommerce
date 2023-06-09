from rest_framework import serializers
from .models import *

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = ['id', 'nome']


class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produtos
        fields = ['id', 'nome', 'descricao', 'preco', 'qtd_estoque', 'foto', 'categoria', 'num_parcelas', 'vendedora', 'disponibilidade']
    
class ClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clientes
        fields = ['id', 'nome', 'email']

class EnderecosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enderecos
        fields = ['id', 'logradouro', 'bairro', 'complemento', 'uf', 'cep', 'numero', 'cliente']

class PedidosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedidos
        fields = ['id', 'metodo', 'data_pedido', 'preco_total', 'status_pagamento']
class PedidosItensSerializer(serializers.ModelSerializer):
    class Meta:
        model = PedidosItens
        fields = ['id', 'produto', 'quantidade', 'preco_total', 'pedido']
