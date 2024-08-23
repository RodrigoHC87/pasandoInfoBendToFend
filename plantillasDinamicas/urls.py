from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('pais/', views.obtener_paises, name='obtener_paises'),
    path('ciudad/<int:pais_id>/', views.obtener_ciudades, name='obtener_ciudades'),
]