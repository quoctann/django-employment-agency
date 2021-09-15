"""
Tập tin này dùng để cấu hình các lớp serializer cho các model chỉ định nhằm
chuyển các dữ liệu json thành object và ngược lại để tương tác trên môi trường
internet. Mỗi lớp model khi được sử dụng trong api sẽ có một lớp serializer
tương ứng
"""
from rest_framework.serializers import ModelSerializer
# from rest_framework import serializers
from .models import *


# Tương tác với model User, sử dụng để bind dữ liệu json từ form nhằm ghi xuống
# csdl, thực hiện chức năng đăng ký
class NguoiDungSerializer(ModelSerializer):
    class Meta:
        # Model sẽ sử dụng để serialize
        model = NguoiDung
        # Các trường sẽ được trả ra dạng json
        fields = ['id', 'first_name', 'last_name', 'email', 'username',
                  'password', 'anh_dai_dien', 'so_dien_thoai']
        # Trường password ko nên trả ra trong api, chỉ sử dụng 1 lần khi ghi vào
        # csdl thôi
        extra_kwargs = {
            'password': {'write_only': 'true'}
        }

    # Ghi đè lại bộ dữ liệu nhận từ người dùng, cụ thể ghi đè lại password sau
    # khi đã được mã hóa (tạo bộ dữ liệu mới)
    def create(self, validated_data):

        print(validated_data)

        # Sử dụng ** để nó tự động parse bộ dữ liệu như mặc định, sau đó cần ghi
        # đè trường nào thì khai báo thêm (tránh lặp code)
        user = NguoiDung(**validated_data)
        # Ghi đè lại trường password (có thể dùng thế này đế set từng trường)
        user.set_password(validated_data['password'])
        user.save()
        return user


class PhucLoiSerializer(ModelSerializer):
    class Meta:
        model = PhucLoi
        fields = ['ten']


class KinhNghiemSerializer(ModelSerializer):
    class Meta:
        model = KinhNghiem
        fields = ['ten']


class NganhNgheSerializer(ModelSerializer):
    class Meta:
        model = NganhNghe
        fields = ['ten']


class KyNangSerializer(ModelSerializer):
    class Meta:
        model = KyNang
        fields = ['ten']


class BangCapSerializer(ModelSerializer):
    class Meta:
        model = BangCap
        fields = ['ten']


class NhaTuyenDungSerializer(ModelSerializer):
    class Meta:
        model = NhaTuyenDung
        fields = "__all__"


class ViecLamSerializer(ModelSerializer):
    phuc_loi = PhucLoiSerializer(many=True)
    kinh_nghiem = KinhNghiemSerializer(many=True)
    nganh_nghe = NganhNgheSerializer(many=True)
    ky_nang = KyNangSerializer(many=True)
    bang_cap = BangCapSerializer(many=True)

    class Meta:
        model = ViecLam
        fields = "__all__"


class UngTuyenSerializer(ModelSerializer):
    class Meta:
        model = UngTuyen
        fields = "__all__"
