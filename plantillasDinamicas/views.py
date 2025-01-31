from django.shortcuts import render

from geografia.models import Pais, Ciudad

from django.http import JsonResponse

# Create your views here.

def home(request):
    return render(request, 'home.html')


def obtener_paises(request):
    paises = list(Pais.objects.values())

    print("PAISES --> ", paises)

    if (len(paises) > 0):
        data = {'mensaje':'Exito', 'paises':paises}

    else:
        data = {'mensaje':'No se encontraron paises'}

    print("data --> ", data)

    return JsonResponse(data, safe=False)



def obtener_ciudades(request, pais_id):
    ciudades = list(Ciudad.objects.filter(pais_id=pais_id).values())

    if (len(ciudades) > 0):
        data = {'mensaje':'Exito', 'ciudades':ciudades}

    else:
        data = {'mensaje':'No se encontraron ciudades'}

    return JsonResponse(data, safe=False)



def cargar_dinamica(request):
    paises = list(Pais.objects.values())
    return render(request, 'plantillaDatos.html', {'paises':paises})



#- Para conocer que esta devolviendo la funcion en consola.
obtener_paises(None)