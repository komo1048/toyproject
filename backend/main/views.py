from django.shortcuts import render
from rest_framework import generics
from django.http import HttpResponse

from .models import Main

def index(request, *args, **kwargs):
    return render(request, 'frontend')

# Create your views here.
