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

Register một route mới sử dụng:
router.register('tên', views.LớpViewSet, basename='tùy_chọn_thôi')

Sau đó nó sẽ tự sinh (tùy thuộc cấu hình trong views) 2 enpoints và 5 urls 
/tên/ - GET
/tên/ - POST
/tên/{tên_id} - GET
/tên/{tên_id} - PUT
/tên/{tên_id} - DELETE
"""
router = DefaultRouter()
router.register('users', views.NguoiDungViewSet)


urlpatterns = [
    # Sử dụng route của rest framework để tự sinh endpoint crud cơ bản
    path('', include(router.urls)),
    # Trang admin mặc định
    path('admin/', admin.site.urls),
]
