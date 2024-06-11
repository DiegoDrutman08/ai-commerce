from django import forms
from .models import Categoria, Producto

class CategoriaForm(forms.ModelForm):
    nombre = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}))
    descripcion = forms.CharField(widget=forms.Textarea(attrs={"class": "form-control"}))

    class Meta:
        model = Categoria
        fields = "__all__"

class ProductoForm(forms.ModelForm):
    nombre = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}))
    descripcion = forms.CharField(widget=forms.Textarea(attrs={"class": "form-control"}))
    categoria = forms.ModelChoiceField(queryset=Categoria.objects.all(), widget=forms.Select(attrs={"class": "form-control"}))
    precio = forms.DecimalField(widget=forms.NumberInput(attrs={"class": "form-control"}))
    stock = forms.IntegerField(widget=forms.NumberInput(attrs={"class": "form-control"}))
    imagen = forms.ImageField(widget=forms.FileInput(attrs={"class": "form-control-file"}))

    class Meta:
        model = Producto
        fields = "__all__"
