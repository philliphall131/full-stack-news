from rest_framework import viewsets
from .serializers import *
from .models import *

class PreferenceViewSet(viewsets.ModelViewSet):
    queryset = Preference.objects.all()
    serializer_class = PreferenceSerializer
