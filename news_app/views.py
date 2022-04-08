# from rest_framework import viewsets
# from .serializers import *
# from .models import *

# class PreferenceViewSet(viewsets.ModelViewSet):
#     queryset = Preference.objects.all()
#     serializer_class = PreferenceSerializer

from django.http import HttpResponse, JsonResponse
from django.core import serializers
from rest_framework.decorators import api_view

from django.contrib.auth import authenticate, login, logout
from .models import AppUser as User
from .models import Preference

# we're not using django templates anymore
def send_the_homepage(request):
    theIndex = open('build/index.html').read()
    return HttpResponse(theIndex)
