"""
Tập tin này dùng để cấu hình url của app, sau khi đã qua url của root
"""
from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter
from . import views


"""
Các lệnh này sẽ tự sinh route api không cần cấu hình thủ công, default router
sẽ render ra trang api của django mà ko cần xử lý gì thêm
"""
router = DefaultRouter()


urlpatterns = [
    # Sử dụng route của rest framework để tự sinh endpoint crud cơ bản
    path('', include(router.urls)),
    # Trang admin mặc định
    path('admin/', admin.site.urls),
    # Xử lý req cơ bản
    path('test/', views.test_view, name="test")
]
