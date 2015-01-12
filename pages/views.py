from django.shortcuts import render
from django.core.urlresolvers import reverse
from django.shortcuts import render, HttpResponseRedirect, Http404
from django.contrib import messages

# Create your views here.

def home(request):
	template = 'home.html'
	context = {}
	return render(request, template, context)

def resume(request):
	template = 'resume.html'
	context = {}
	return render(request, template, context)

def film(request):
	template = 'film.html'
	context = {}
	return render(request, template, context)

def photos(request):
	template = 'photos.html'
	context = {}
	return render(request, template, context)

def projects(request):
	template = 'projects.html'
	context = {}
	return render(request, template, context)

def web_design(request):
	template = 'web-design.html'
	context = {}
	return render(request, template, context)

def music(request):
	template = 'music.html'
	context = {}
	return render(request, template, context)

def contact(request):
	template = 'contact.html'
	context = {}
	return render(request, template, context)
