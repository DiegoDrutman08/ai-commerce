from django.http import JsonResponse
from .models import Categoria, Producto
from django.core.serializers import serialize
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def crear_categoria(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            nombre = data.get('nombre')
            descripcion = data.get('descripcion')
            nueva_categoria = Categoria.objects.create(nombre=nombre, descripcion=descripcion)

            return JsonResponse({'mensaje': 'Categoría creada exitosamente'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'mensaje': 'Solo se admiten solicitudes POST'}, status=405)


def lista_categorias(request):
    if request.method == 'GET':
        categorias = Categoria.objects.all()
        categorias_serializadas = serialize('json', categorias)
        return JsonResponse({'categorias': categorias_serializadas}, safe=False)
    else:
        return JsonResponse({'mensaje': 'Solo se admiten solicitudes GET'}, status=405)

def detalle_categoria(request, pk):
    if request.method == 'GET':
        categoria = Categoria.objects.filter(pk=pk).values().first()
        if categoria:
            return JsonResponse(categoria)
        else:
            return JsonResponse({'error': 'La categoría no existe'}, status=404)
    else:
        return JsonResponse({'mensaje': 'Solo se admiten solicitudes GET'}, status=405)

@csrf_exempt
def actualizar_categoria(request, pk):
    if request.method == 'PUT':
        try:
            data = json.loads(request.body)
            nombre = data.get('nombre')
            descripcion = data.get('descripcion')

            categoria = Categoria.objects.filter(pk=pk).first()
            if categoria:
                categoria.nombre = nombre
                categoria.descripcion = descripcion
                categoria.save()
                return JsonResponse({'mensaje': 'Categoría actualizada exitosamente'})
            else:
                return JsonResponse({'error': 'La categoría no existe'}, status=404)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'mensaje': 'Solo se admiten solicitudes PUT'}, status=405)

@csrf_exempt
def eliminar_categoria(request, pk):
    if request.method == 'DELETE':
        categoria = Categoria.objects.filter(pk=pk).first()
        if categoria:
            categoria.delete()
            return JsonResponse({'mensaje': 'Categoría eliminada exitosamente'})
        else:
            return JsonResponse({'error': 'La categoría no existe'}, status=404)
    else:
        return JsonResponse({'mensaje': 'Solo se admiten solicitudes DELETE'}, status=405)
    
@csrf_exempt
def crear_producto(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            nombre = data.get('nombre')
            descripcion = data.get('descripcion')
            categoria_id = data.get('categoria')
            precio = data.get('precio')
            stock = data.get('stock')
            imagen = request.FILES.get('imagen')

            # Obtenemos la categoría
            categoria = Categoria.objects.get(id=categoria_id)

            # Creamos el producto con los datos proporcionados
            nuevo_producto = Producto.objects.create(
                nombre=nombre,
                descripcion=descripcion,
                categoria=categoria,
                precio=precio,
                stock=stock,
                imagen=imagen
            )

            return JsonResponse({'mensaje': 'Producto creado exitosamente'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'mensaje': 'Solo se admiten solicitudes POST'}, status=405)


def lista_productos(request):
    if request.method == 'GET':
        queryset = Producto.objects.all().values()
        return JsonResponse(list(queryset), safe=False)
    else:
        return JsonResponse({'mensaje': 'Solo se admiten solicitudes GET'}, status=405)

def detalle_producto(request, pk):
    if request.method == 'GET':
        producto = Producto.objects.filter(pk=pk).values().first()
        if producto:
            return JsonResponse(producto)
        else:
            return JsonResponse({'error': 'El producto no existe'}, status=404)
    else:
        return JsonResponse({'mensaje': 'Solo se admiten solicitudes GET'}, status=405)

@csrf_exempt
def actualizar_producto(request, pk):
    if request.method == 'PUT':
        try:
            data = json.loads(request.body)
            nombre = data.get('nombre')
            descripcion = data.get('descripcion')

            producto = Producto.objects.filter(pk=pk).first()
            if producto:
                producto.nombre = nombre
                producto.descripcion = descripcion
                producto.save()
                return JsonResponse({'mensaje': 'Producto actualizado exitosamente'})
            else:
                return JsonResponse({'error': 'El producto no existe'}, status=404)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'mensaje': 'Solo se admiten solicitudes PUT'}, status=405)

@csrf_exempt
def eliminar_producto(request, pk):
    if request.method == 'DELETE':
        producto = Producto.objects.filter(pk=pk).first()
        if producto:
            producto.delete()
            return JsonResponse({'mensaje': 'Producto eliminado exitosamente'})
        else:
            return JsonResponse({'error': 'El producto no existe'}, status=404)
    else:
        return JsonResponse({'mensaje': 'Solo se admiten solicitudes DELETE'}, status=405)