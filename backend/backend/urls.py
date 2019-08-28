from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path(r'api/admin/', admin.site.urls),
    path(r'test/', views.index, name='index'),
]
