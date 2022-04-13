from django.http import HttpResponse, JsonResponse
from django.core import serializers
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from .models import AppUser as User
from .models import *

# we're not using django templates anymore
def send_the_homepage(request):
    theIndex = open('build/index.html').read()
    return HttpResponse(theIndex)

@api_view(['POST'])
def sign_up(request):
    try:
        username = request.data['username']
        password = request.data['password']
        email = request.data['email']
        User.objects.create_user(username=username, password=password, email=email)
        return JsonResponse({"username":username})
    except Exception as e:
        print(str(e))
        return HttpResponse('failed to register')


def log_in(request):
    username = request.data['username']
    password = request.data['password']
    user = authenticate(username=username, password=password)
    if user is not None:    
        try:
            # access the base request, not DRF request (starts a login session for user)   
            login(request._request, user)
        except Exception as e:
            print(str(e))
        # Don't send everything from user, only what app needs to use for state
        print('youre logged in now')
        return JsonResponse({"username":user.username})             
    else:
        return HttpResponse('no user!')

@api_view(["GET"])
def who_am_i(request):
    if request.user.is_authenticated:
        print('already logged in')
        return JsonResponse({"user":request.user.username})
    print('no user logged in')
    return JsonResponse({"user":None})
    
@api_view(['POST'])
def log_out(request):
    logout(request)
    print('I logged you out')
    return HttpResponse('Logged you out!')
