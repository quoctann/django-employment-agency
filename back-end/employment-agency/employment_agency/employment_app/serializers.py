"""
Tập tin này dùng để cấu hình các lớp serializer cho các model chỉ định nhằm
chuyển các dữ liệu json thành object và ngược lại để tương tác trên môi trường
internet. Mỗi lớp model khi được sử dụng trong api sẽ có một lớp serializer
tương ứng
"""
from rest_framework.serializers import ModelSerializer
from .models import *


# Tương tác với model User, sử dụng để bind dữ liệu json từ form nhằm ghi xuống
# csdl, thực hiện chức năng đăng ký
class NguoiDungSerializer(ModelSerializer):
    class Meta:
        # Model sẽ sử dụng để serialize
        model = NguoiDung
        # Các trường sẽ được trả ra dạng json
        fields = ['id', 'first_name', 'last_name', 'email', 'username',
                  'password', 'anh_dai_dien']
        # Trường password ko nên trả ra trong api, chỉ sử dụng 1 lần khi ghi vào
        # csdl thôi
        extra_kwargs = {
            'password': {'write_only': 'true'}
        }

    # Ghi đè lại bộ dữ liệu nhận từ người dùng, cụ thể ghi đè lại password sau
    # khi đã được mã hóa (tạo bộ dữ liệu mới)
    def create(self, validated_data):
        # Sử dụng ** để nó tự động parse bộ dữ liệu như mặc định, sau đó cần ghi
        # đè trường nào thì khai báo thêm (tránh lặp code)
        user = NguoiDung(**validated_data)
        # Ghi đè lại trường password (có thể dùng thế này đế set từng trường)
        user.set_password(validated_data['password'])
        user.save()
        return user
