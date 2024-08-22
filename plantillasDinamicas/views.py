from django.shortcuts import render

from geografia.models import Pais, Ciudad

from django.http import JsonResponse

# Create your views here.

def home(request):
    return render(request, 'home.html')


def obtener_paises(request):
    paises = list(Pais.objects.values())

    ciudades = list(Ciudad.objects.values())

    print("PAISES --> ", paises)

    if (len(paises) > 0):
        data = {'mensaje':'Exito', 'paises':paises, 'ciudades':ciudades}

    else:
        data = {'mensaje':'No se encontraron paises'}

    print("data --> ", data)

    return JsonResponse(data, safe=False)



#- Para conocer que esta devolviendo la funcion en consola.
obtener_paises(None)