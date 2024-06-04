from django.db.models.query import QuerySet
from django.shortcuts import render,redirect
from django.urls import reverse_lazy
from . import forms, models
from .forms import InformacionContactoForm
from django.views.generic import (
    CreateView,
    DeleteView,
    DetailView,
    ListView,
    UpdateView,
)

def home(request):
    return render(request, "producto/index.html")

class CategoriaList(ListView):
    model = models.Categoria

    def get_queryset(self) -> QuerySet:
        if self.request.GET.get("consulta"):
            consulta = self.request.GET.get("consulta")
            object_list = models.Categoria.objects.filter(nombre__icontains=consulta)
        else:
            object_list = models.Categoria.objects.all()
        return object_list

class CategoriaCreate(CreateView):
    model = models.Categoria
    form_class = forms.CategoriaForm
    success_url = reverse_lazy("producto:home")

class CategoriaUpdate(UpdateView):
    model = models.Categoria
    form_class = forms.CategoriaForm
    success_url = reverse_lazy("producto:categoria_list")

class CategoriaDetail(DetailView):
    model = models.Categoria

class CategoriaDelete(DeleteView):
    model = models.Categoria
    success_url = reverse_lazy("producto:categoria_list")

class ProductoList(ListView):
    model = models.Producto

    def get_queryset(self) -> QuerySet:
        if self.request.GET.get("consulta"):
            consulta = self.request.GET.get("consulta")
            object_list = models.Producto.objects.filter(nombre__icontains=consulta)
        else:
            object_list = models.Producto.objects.all()
        return object_list

class ProductoCreate(CreateView):
    model = models.Producto
    form_class = forms.ProductoForm
    success_url = reverse_lazy("producto:home")


class ProductoUpdate(UpdateView):
    model = models.Producto
    form_class = forms.ProductoForm
    success_url = reverse_lazy("producto:producto_list")


class ProductoDetail(DetailView):
    model = models.Producto


class ProductoDelete(DeleteView):
    model = models.Producto
    success_url = reverse_lazy("producto:producto_list")