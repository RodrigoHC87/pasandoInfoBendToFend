from django.shortcuts import render
from .models import Pais, Ciudad


from django.http import JsonResponse

# Create your views here.

def index(request):
    return render(request, 'index.html')


def get_paises(request):
    paises = list(Pais.objects.values())

    if (len(paises) > 0):
        data = {'mensaje':'Exito', 'paises':paises}

    else:
        data = {'mensaje':'No se encontraron paises'}

    return JsonResponse(data, safe=False)


def get_ciudades(request, pais_id):
    ciudades = list(Ciudad.objects.filter(pais_id=pais_id).values())

    if (len(ciudades) > 0):
        data = {'mensaje':'Exito', 'ciudades':ciudades}

    else:
        data = {'mensaje':'No se encontraron ciudades'}

    return JsonResponse(data, safe=False)