from django.shortcuts import render
from django.http import JsonResponse
from .translateHTML import getTranslatedTrs

def index(request):
    return render(request, 'index.html')  

def toTranslate(request):
    pass

def request(request):
    print(request.GET.get("test"))
    return JsonResponse({"Test_is_a_success": True})

def translate(request):
    print("Works")
    print(request.GET.get("lang"))
    html = request.GET.get("html")
    print(html)
    lang = request.GET.get("lang")
    return JsonResponse(getTranslatedTrs(html, lang))

# Create your views here.
