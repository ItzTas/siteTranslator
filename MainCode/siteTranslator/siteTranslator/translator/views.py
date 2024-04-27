from django.shortcuts import render
from django.http import JsonResponse

def index(request):
    return render(request, 'index.html')  

def toTranslate(request):
    pass

def request(request):
    print(request.GET.get("test"))
    return JsonResponse({"Test_is_a_success": True})

# Create your views here.
