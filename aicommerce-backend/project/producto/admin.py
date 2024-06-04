from django.contrib import admin
from . import models

admin.site.site_title = "Productos"

class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("nombre", "descripcion")
    list_display_links = ("nombre",)


class ProductoAdmin(admin.ModelAdmin):
    list_display = (
        "categoria_id",
        "nombre",
        "telefono",
        "email",
        "descripcion",
        "fecha_actualizacion",
    )
    list_display_links = ("nombre",)
    search_fields = ("nombre",)
    ordering = ("categoria_id", "nombre")
    list_filter = ("categoria_id",)
    date_hierarchy = "fecha_actualizacion"

admin.site.register(models.Categoria, CategoriaAdmin)
admin.site.register(models.Producto, ProductoAdmin)

