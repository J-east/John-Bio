from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'pages.views.home', name='home'),
    url(r'^resume/$', 'pages.views.resume', name='resume'),
    url(r'^film/$', 'pages.views.film', name='film'),
    url(r'^photos/$', 'pages.views.photos', name='photos'),
    url(r'^projects/$', 'pages.views.projects', name='projects'),
    url(r'^web-design/$', 'pages.views.web_design', name='web_design'),
    url(r'^music/$', 'pages.views.music', name='music'),
    url(r'^contact/$', 'pages.views.contact', name='contact'),
)

if settings.DEBUG:
	urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)