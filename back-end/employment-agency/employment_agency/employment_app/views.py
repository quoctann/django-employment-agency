# Tập tin này để xử lý request và trả về các response
from django.http import HttpResponse


def test_view(request):
    return HttpResponse("Its worked!")
