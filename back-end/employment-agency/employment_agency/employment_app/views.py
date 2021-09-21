# Tập tin này để xử lý request và trả về các response (tương tự controller trong
# MVC, là thành phần Views trong MVT)
from django.db.models import Model
from rest_framework import viewsets, generics, permissions, status
from rest_framework.decorators import action
from rest_framework.generics import get_object_or_404
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.views import APIView
from django.conf import settings

from .serializers import *


# Đăng ký user (tích hợp OAuth2)
# Sử dụng ViewSet để tự cấu hình thay vì các lớp view được hiện thực sẵn
# Sử dụng generics.CreateAPIView để hiện thực các phương thức create của viewset
# Sử dụng generics.RetrieveAPIView để lấy thông tin 1 user thông qua id
# Để ràng buộc chỉ user đã đăng nhập mới lấy được thông tin ta ghi đè lại phương
# thức get_permission
class NguoiDungViewSet(viewsets.ViewSet, generics.CreateAPIView):
    # Phương thức để trả về swagger ko lỗi (do swagger không hỗ trợ nested
    # serializer -> hiển thị dấu "." trong tên.trường_nested bị lỗi)
    def get_parsers(self):
        if getattr(self, 'swagger_fake_view', False):
            return []
        return super().get_parsers()

    # Chỉ định câu truy vấn
    queryset = NguoiDung.objects.filter(is_active=True)
    # Chỉ định lớp serializer
    serializer_class = NguoiDungSerializer
    parser_classes = [MultiPartParser]

    # Chỉ định quyền user đã đăng nhập
    def get_permissions(self):
        # Chỉ riêng đối với thao tác get data user hiện tại phải chứng thực
        if self.action == 'get_current-user':
            return [permissions.IsAuthenticated()]
        # Thao tác như đăng ký ko cần chứng thực
        return [permissions.AllowAny()]

    # Tạo API get dữ liệu user sau khi đã chứng thực (đã đăng nhập)
    @action(methods=['get'], detail=False, url_path='hien-tai')
    def get_current_user(self, request):
        # print(request)
        return Response(self.serializer_class(request.user).data,
                        status.HTTP_200_OK)


# Xem việc làm
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
    page_size = 6


class ViecLamViewSet(viewsets.ViewSet,
                     generics.ListAPIView):
    queryset = ViecLam.objects.filter(trang_thai_viec_lam=ViecLam.DANG_MO)
    serializer_class = ViecLamSerializer
    pagination_class = ViecLamPagination

    # Override generic để lấy chi tiết nha_tuyen_dung
    def retrieve(self, request, pk=None):
        queryset = ViecLam.objects.filter(trang_thai_viec_lam=ViecLam.DANG_MO).select_related(
            "nha_tuyen_dung__nguoi_dung")
        vieclam = get_object_or_404(queryset, pk=pk)
        serializer = ViecLamSerializer(vieclam)
        return Response(serializer.data)


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

    # API kiểm tra ứng viên đã ứng tuyển việc làm này chưa, nhận vào 2 req params
    # /ung-tuyen/hop-le/?ung-vien-id=số&viec-lam-id=số
    @action(methods=['get'], detail=False, url_path='hop-le')
    def valid_request(self, request):
        if request.query_params.__contains__('ung-vien-id') and request.query_params.__contains__('viec-lam-id'):
            uv_id = request.query_params.__getitem__('ung-vien-id')
            vl_id = request.query_params.__getitem__('viec-lam-id')
            # Dữ liệu gửi lên: { 'viec_lam': 'số', 'ung_vien': 'số' }
            query = UngTuyen.objects.filter(viec_lam_id=vl_id, ung_vien_id=uv_id)
            print(query.__len__())
            # Nếu đã ứng tuyển rồi thì ko ứng tuyển nữa
            if query.__len__() == 0:
                return Response({'valid': True}, status.HTTP_200_OK)
            else:
                return Response({'valid': False}, status.HTTP_200_OK)

        else:
            return Response({'invalid request': 'need ung-vien-id and viec-lam-id as request parameters'}, status.HTTP_400_BAD_REQUEST)


# API để lấy thông tin client_id, client_secret xin token chứng thực (đăng nhập)
class AuthInfo(APIView):
    def get(self, request):
        return Response(settings.OAUTH2_INFO, status.HTTP_200_OK)
