from django.shortcuts import render
from django.http import JsonResponse
from .translateHTML import getTranslatedTrs

def index(request):
    return render(request, 'index.html')  

def translate(request):
    html = request.GET.get("html")
    lang = request.GET.get("lang")
    return JsonResponse(getTranslatedTrs(html, lang))

# Create your views here.
