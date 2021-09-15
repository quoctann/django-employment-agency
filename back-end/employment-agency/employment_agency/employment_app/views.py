# Tập tin này để xử lý request và trả về các response
from django.views import View
from rest_framework import viewsets, generics, permissions, status
from rest_framework.decorators import action
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

from .serializers import *


# Đăng ký user (tích hợp OAuth2)
# Sử dụng ViewSet để tự cấu hình thay vì các lớp view được hiện thực sẵn
# Sử dụng generics.CreateAPIView để hiện thực các phương thức create của viewset
# Sử dụng generics.RetrieveAPIView để lấy thông tin 1 user thông qua id
# Để ràng buộc chỉ user đã đăng nhập mới lấy được thông tin ta ghi đè lại phương
# thức get_permission
class NguoiDungViewSet(viewsets.ViewSet,
                       generics.CreateAPIView,
                       generics.ListAPIView):
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


# xem viec lam
class PhucLoiViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = PhucLoi.objects.all()
    serializer_class = PhucLoiSerializer


class KinhNghiemViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = KinhNghiem.objects.all()
    serializer_class = KinhNghiemSerializer


class NganhNgheViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = NganhNghe.objects.all()
    serializer_class = NganhNgheSerializer


class KyNangViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = KyNang.objects.all()
    serializer_class = KyNangSerializer


class BangCapViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = BangCap.objects.all()
    serializer_class = BangCapSerializer


# ------------------- change
class ViecLamPagination(PageNumberPagination):
    page_size = 3


class ViecLamViewSet(viewsets.ViewSet,
                     generics.ListAPIView,
                     generics.RetrieveAPIView):
    queryset = ViecLam.objects.all()
    serializer_class = ViecLamSerializer
    pagination_class = ViecLamPagination
# ------------------------------------------------


class NhaTuyenDungViewSet(viewsets.ViewSet,
                          generics.ListAPIView,
                          generics.RetrieveAPIView):
    queryset = NhaTuyenDung.objects.all()
    serializer_class = NhaTuyenDungSerializer


class UngTuyenViewSet(viewsets.ViewSet,
                          generics.ListAPIView,
                          generics.CreateAPIView):
    queryset = UngTuyen.objects.all()
    serializer_class = UngTuyenSerializer
