from django.urls import path
from . import views

from django.shortcuts import render

urlpatterns = [
    path('', views.home, name='home'),
    path('pais/', views.obtener_paises, name='obtener_paises'),
    path('ciudad/<int:pais_id>/', views.obtener_ciudades, name='obtener_ciudades'),

    path('plantilaAux/', lambda request: render(request, 'plantilla.html'), name='plantilaAux'),

    path('cargarDinamica/', views.cargar_dinamica, name='cargar_dinamica'),
]