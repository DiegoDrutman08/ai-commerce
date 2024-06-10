from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path
from . import views
from .views import api_login, api_register, api_categorias, api_contacto

app_name = "core"

urlpatterns = [
    path('api/login/', api_login, name='api_login'),
    path('api/register/', api_register, name='api_register'),
    path('api/categorias/', api_categorias, name='api_categorias'),
    path('api/contacto/', api_contacto, name='api_contacto'),
    path('api/productos/<int:producto_id>/', views.api_producto, name='api_producto'),
]

urlpatterns += staticfiles_urlpatterns()
