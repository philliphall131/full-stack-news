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
    # path('signup', views.sign_up),
    # path('login', views.log_in),
    # path('logout', views.log_out),
    # path('whoami', views.who_am_i),
    # path('preferences', views.preferences),

]