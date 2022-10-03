from django.shortcuts import render
from rest_framework import generics
from django.http import HttpResponse

from .models import Main

def index(request):
    return HttpResponse("Hello")

# Create your views here.
