# Tập tin này để xử lý request và trả về các response
from django.views import View
from rest_framework import viewsets, generics, permissions, status
from rest_framework.decorators import action
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response

from .serializers import *


# Đăng ký user (tích hợp OAuth2)
# Sử dụng ViewSet để tự cấu hình thay vì các lớp view được hiện thực sẵn
# Sử dụng generics.CreateAPIView để hiện thực các phương thức create của viewset
# Sử dụng generics.RetrieveAPIView để lấy thông tin 1 user thông qua id
# Để ràng buộc chỉ user đã đăng nhập mới lấy được thông tin ta ghi đè lại phương
# thức get_permission
class NguoiDungViewSet(viewsets.ViewSet, generics.CreateAPIView):
    # Chỉ định câu truy vấn
    queryset = NguoiDung.objects.filter(is_active=True)
    # Chỉ định lớp serialize
    serializer_class = NguoiDungSerializer
    parser_classes = [MultiPartParser]

    # Chỉ định quyền user đã đăng nhập
    def get_permissions(self):
        if self.action == 'current-user':
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    # Tạo API get dữ liệu user sau khi đã chứng thực (đã đăng nhập)
    @action(methods=['get'], detail=False, url_path='current-user')
    def current_user(self, request):
        return Response(self.serializer_class(request.user).data)
