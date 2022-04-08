from django.urls import path, include
from rest_framework import routers
from .views import *

r = routers.DefaultRouter()
r.register("preferences", PreferenceViewSet, basename="preference")

urlpatterns = [
    path("", include(r.urls))
]