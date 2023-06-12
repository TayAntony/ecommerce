from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import viewsets
from .serializer import *
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class Categoria(ListCreateAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = Categorias.objects.all()
    serializer_class = CategoriaSerializer

class CategoriaDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = Categorias.objects.all()
    serializer_class = CategoriaSerializer
    
class ProdutoList(ListCreateAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = Produtos.objects.all()
    serializer_class = ProdutoSerializer

class ProdutoDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = Produtos.objects.all()
    serializer_class = ProdutoSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer
    
