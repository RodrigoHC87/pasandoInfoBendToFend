from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('pais/', views.obtener_paises, name='obtener_paises'),
    
]