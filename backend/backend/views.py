from django.http import JsonResponse

# Returns if user is authenticated, based on cookies passed along the request
def index(request):
    return JsonResponse({ "status": request.user.is_authenticated })