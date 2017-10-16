from django.shortcuts import render
from django.views.decorators.clickjacking import xframe_options_exempt

@xframe_options_exempt
def index(request):
# this is your new view
	return render(request, 'index.html')
