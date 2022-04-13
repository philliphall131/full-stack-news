from rest_framework import serializers
from .models import *
from django.contrib.auth.forms import AuthenticationForm

class PreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preference
        fields = ['id','user', 'name', 'label', 'value']

