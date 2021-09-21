"""
Tập tin này dùng để cấu hình các lớp serializer cho các model chỉ định nhằm
chuyển các dữ liệu json thành object và ngược lại để tương tác trên môi trường
internet. Mỗi lớp model khi được sử dụng trong api sẽ có một lớp serializer
tương ứng
"""
from rest_framework.serializers import ModelSerializer
from .models import *


# Tạo người dùng cơ bản
class NguoiDungSerializer(ModelSerializer):
    class Meta:
        model = NguoiDung
        fields = ['username', 'password', 'email', 'first_name', 'last_name',
                  'vai_tro', 'anh_dai_dien']
        extra_kwargs = {
            'password': {'write_only': 'true'},
        }

    def create(self, validated_data):
        nguoidung = NguoiDung(**validated_data)
        nguoidung.set_password(validated_data['password'])
        nguoidung.save()
        return nguoidung


class UngVienSerializer(ModelSerializer):
    class Meta:
        model = UngVien
        fields = '__all__'


class NhaTuyenDungSerializer(ModelSerializer):
    class Meta:
        model = NhaTuyenDung
        fields = '__all__'


class PhucLoiSerializer(ModelSerializer):
    class Meta:
        model = PhucLoi
        fields = '__all__'


class KinhNghiemSerializer(ModelSerializer):
    class Meta:
        model = KinhNghiem
        fields = '__all__'


class NganhNgheSerializer(ModelSerializer):
    class Meta:
        model = NganhNghe
        fields = '__all__'


class KyNangSerializer(ModelSerializer):
    class Meta:
        model = KyNang
        fields = '__all__'


class BangCapSerializer(ModelSerializer):
    class Meta:
        model = BangCap
        fields = '__all__'


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
