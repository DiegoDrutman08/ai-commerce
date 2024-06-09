from django.contrib.auth.views import LoginView
from django.shortcuts import render, redirect
from .forms import CustomAuthenticationForm, CustomUserCreationForm, ContactoForm
from producto.models import Categoria, Producto
from .models import Contacto
from django.contrib import messages
from django.urls import reverse_lazy
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def home(request):
    return render(request, "core/index.html")

class CustomLoginView(LoginView):
    authentication_form = CustomAuthenticationForm
    template_name = "core/login.html"

    def form_valid(self, form):
        # Autenticar al usuario
        self.user = form.get_user()
        return super().form_valid(form)

    def get_success_url(self):
        # Si el usuario no es superadministrador, redirigir a la página de inicio
        if not self.user.is_superuser:
            return reverse_lazy('producto:home')
        else:
            return super().get_success_url()

@csrf_exempt
def api_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print("Received data:", data)  # Verifica los datos recibidos
        username = data.get('username')
        password = data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'}, status=200)
        else:
            print("Invalid credentials for user:", username)  # Verifica el error de autenticación
            return JsonResponse({'message': 'Invalid credentials'}, status=400)
    return JsonResponse({'message': 'Method not allowed'}, status=405)

        
def register(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('core:home')
    else:
        form = CustomUserCreationForm()
    return render(request, "core/register.html", {"form": form})

def about_me(request):
    return render(request, 'core/about_me.html')

def categorias(request):
    categorias = Categoria.objects.all()
    categorias_con_productos = []
    for categoria in categorias:
        productos = Producto.objects.filter(categoria=categoria)
        categorias_con_productos.append({'categoria': categoria, 'productos': productos})
    return render(request, 'core/categorias.html', {'categorias_con_productos': categorias_con_productos})

def contacto(request):
    if request.method == 'POST':
        form = ContactoForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            
            Contacto.objects.create(nombre=name, email=email, mensaje=message)
            
            messages.success(request, 'Tu mensaje ha sido enviado correctamente. ¡Gracias por contactarnos!')
            return redirect('core:contacto')  # Redireccionar a la misma página de contacto o a otra página de éxito
    else:
        form = ContactoForm()
    return render(request, 'core/contacto.html', {'form': form})

def productos(request, producto_id):
    producto = Producto.objects.get(pk=producto_id)
    return render(request, 'core/productos.html', {'producto': producto})