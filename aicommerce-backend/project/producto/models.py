from django.db import models
from django.utils import timezone

class Categoria(models.Model):
    nombre = models.CharField(max_length=200, unique=True)
    descripcion = models.CharField(max_length=250, null=True, blank=True, verbose_name="descripción")

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = "categoria"
        verbose_name_plural = "categorias"

class Producto(models.Model):
    categoria = models.ForeignKey(
        Categoria, null=True, blank=True, on_delete=models.SET_NULL, verbose_name="categoria"
    )
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(null=True, blank=True, verbose_name="descripción")
    precio = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    stock = models.PositiveIntegerField(default=0)
    imagen = models.ImageField(upload_to="productos", null=True, blank=True, verbose_name="imagen")
    fecha_actualizacion = models.DateTimeField(
        null=True, blank=True, default=timezone.now, editable=False, verbose_name="fecha de actualización"
    )

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = "producto"
        verbose_name_plural = "productos"
