from django.urls import path
from . import views

app_name = "producto"

urlpatterns = [
  # Rutas para categorías
    path('categoria/create/', views.crear_categoria, name='crear_categoria'),
    path("categoria/list/", views.lista_categorias, name="lista_categorias"),
    path("categoria/detail/<int:pk>/", views.detalle_categoria, name="detalle_categoria"),
    path("categoria/update/<int:pk>/", views.actualizar_categoria, name="actualizar_categoria"),
    path("categoria/delete/<int:pk>/", views.eliminar_categoria, name="eliminar_categoria"),
    
    # Rutas para productos
    path("producto/list/", views.lista_productos, name="lista_productos"),
    path("producto/create/", views.crear_producto, name="crear_producto"),
    path("producto/detail/<int:pk>/", views.detalle_producto, name="detalle_producto"),
    path("producto/update/<int:pk>/", views.actualizar_producto, name="actualizar_producto"),
    path("producto/delete/<int:pk>/", views.eliminar_producto, name="eliminar_producto"),
]
