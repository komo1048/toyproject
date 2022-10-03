from django.urls import path, include, re_path
from . import views
from django.views.generic import TemplateView
urlpatterns = [
    path('', views.index),
    ##re_path('.*', TemplateView.as_view(template_name="index.html")),
    ##path('', TemplateView.as_view(template_name="index.html")),
]

## MTV
## MVC 
