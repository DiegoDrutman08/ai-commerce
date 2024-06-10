from django.http import JsonResponse
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Categoria, Producto

# Vistas para categorías
class CategoriaList(ListView):
    model = Categoria

    def get_queryset(self):
        queryset = super().get_queryset()
        return list(queryset.values())

class CategoriaDetail(DetailView):
    model = Categoria

    def get_object(self):
        obj = super().get_object()
        return {
            'id': obj.id,
            'nombre': obj.nombre,
            # Agrega más campos según sea necesario
        }

class CategoriaCreate(CreateView):
    model = Categoria
    fields = ['nombre']  # Agrega los campos necesarios
    success_url = reverse_lazy('categoria-list')

class CategoriaUpdate(UpdateView):
    model = Categoria
    fields = ['nombre']  # Agrega los campos necesarios
    success_url = reverse_lazy('categoria-list')

class CategoriaDelete(DeleteView):
    model = Categoria
    success_url = reverse_lazy('categoria-list')

# Vistas para productos
class ProductoList(ListView):
    model = Producto

    def get_queryset(self):
        queryset = super().get_queryset()
        return list(queryset.values())

class ProductoDetail(DetailView):
    model = Producto

    def get_object(self):
        obj = super().get_object()
        return {
            'id': obj.id,
            'nombre': obj.nombre,
            # Agrega más campos según sea necesario
        }

class ProductoCreate(CreateView):
    model = Producto
    fields = ['nombre']  # Agrega los campos necesarios
    success_url = reverse_lazy('producto-list')

class ProductoUpdate(UpdateView):
    model = Producto
    fields = ['nombre']  # Agrega los campos necesarios
    success_url = reverse_lazy('producto-list')

class ProductoDelete(DeleteView):
    model = Producto
    success_url = reverse_lazy('producto-list')
