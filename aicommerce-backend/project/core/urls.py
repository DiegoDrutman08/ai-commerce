from django.contrib.auth.views import LogoutView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path
from . import views
from .views import categorias, contacto, productos
from .views import api_login


app_name = "core"

urlpatterns = [
    path("", views.home, name="home"),
    path("login/", views.CustomLoginView.as_view(), name="login"),
    path("logout/", LogoutView.as_view(template_name="core/logout.html"), name="logout"),
    path("register/", views.register, name="register"),
    path('about_me/', views.about_me, name='about_me'),
    path('categorias/', categorias, name='categorias'),
    path('productos/<int:producto_id>/', views.productos, name='productos'),
    path('contacto/', contacto, name='contacto'),
    path('api/login/', api_login, name='api_login'),
]

urlpatterns += staticfiles_urlpatterns()
