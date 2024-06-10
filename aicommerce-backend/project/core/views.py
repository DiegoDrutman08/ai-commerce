from .forms import ContactoForm
from producto.models import Categoria, Producto
from .models import Contacto
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.models import User

@csrf_exempt
def api_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print("Received data:", data)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'}, status=200)
        else:
            print("Invalid credentials for user:", username)
            return JsonResponse({'message': 'Invalid credentials'}, status=400)
    return JsonResponse({'message': 'Method not allowed'}, status=405)

@csrf_exempt
def api_register(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get('username')
        password1 = data.get('password1')
        password2 = data.get('password2')

        if password1 != password2:
            return JsonResponse({'errors': {'password2': 'Passwords do not match'}}, status=400)

        if User.objects.filter(username=username).exists():
            return JsonResponse({'errors': {'username': 'Username already taken'}}, status=400)

        try:
            user = User.objects.create_user(username=username, password=password1)
            user = authenticate(username=username, password=password1)
            if user is not None:
                login(request, user)
                return JsonResponse({'message': 'Registration and login successful'}, status=200)
        except Exception as e:
            return JsonResponse({'errors': {'detail': str(e)}}, status=400)
    return JsonResponse({'message': 'Method not allowed'}, status=405)

def api_categorias(request):
    categorias = Categoria.objects.all()
    categorias_con_productos = []

    for categoria in categorias:
        productos = list(Producto.objects.filter(categoria=categoria).values())
        categorias_con_productos.append({'categoria': categoria.nombre, 'productos': productos})

    return JsonResponse(categorias_con_productos, safe=False)

@csrf_exempt
def api_contacto(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            form = ContactoForm(data)
            print("Request JSON data:", data)
            print("Form data:", form.data)
            print("Form errors:", form.errors)
            if form.is_valid():
                # Extraemos los datos del formulario limpios
                name = form.cleaned_data['name']
                email = form.cleaned_data['email']
                subject = form.cleaned_data['subject']
                message = form.cleaned_data['message']

                # Creamos un nuevo objeto de Contacto con los datos del formulario
                contacto = Contacto.objects.create(name=name, email=email, subject=subject, message=message)

                # Podemos devolver el ID del contacto creado si es necesario
                return JsonResponse({'success': True, 'message': 'Tu mensaje ha sido enviado correctamente. ¡Gracias por contactarnos!', 'contacto_id': contacto.id})
            else:
                # Si el formulario no es válido, devolvemos los errores de validación
                errors = dict(form.errors.items())  # Convertimos los errores del formulario en un diccionario para JSON
                return JsonResponse({'success': False, 'errors': errors}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'success': False, 'message': 'Invalid JSON'}, status=400)
    else:
        # Si no es una solicitud POST, devolvemos un error de método no permitido
        return JsonResponse({}, status=405)

    
def api_producto(request, producto_id):
    try:
        producto = Producto.objects.get(pk=producto_id)
        return JsonResponse({'success': True, 'producto': {'id': producto.id, 'nombre': producto.nombre, 'descripcion': producto.descripcion, 'imagen': producto.imagen}})
    except Producto.DoesNotExist:
        return JsonResponse({'success': False, 'error': 'El producto no existe'}, status=404)