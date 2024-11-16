from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse  # JSON 응답용
from django.conf import settings
from django.conf.urls.static import static

# 루트 URL 응답 뷰
def root_view(request):
    return JsonResponse({"message": "Welcome to the AI Compliance API!"})

urlpatterns = [
    path('admin/', admin.site.urls),  # 관리자 URL
    path('api/', include('api.urls')),  # API URL 포함
    path('', root_view, name='root'),  # 루트 URL 처리
]

# STATIC 및 MEDIA URL 설정 (DEBUG 모드에서만 사용)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
