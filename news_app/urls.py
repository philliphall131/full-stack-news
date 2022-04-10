# from django.urls import path, include
# from rest_framework import routers
# from .views import *

# r = routers.DefaultRouter()
# r.register("preferences", PreferenceViewSet, basename="preference")

# urlpatterns = [
#     path("", include(r.urls))
# ]

from django.urls import path
from .views import *

urlpatterns = [
    path('', send_the_homepage),
    path('signup/', sign_up),
    path('login/', log_in),
    path('logout/', log_out),
    path('whoami/', who_am_i),
    # path('preferences', views.preferences),

]