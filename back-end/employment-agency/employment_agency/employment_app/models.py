# Tập tin này dùng để cấu hình các model ánh xạ xuống cơ sở dữ liệu
from django.contrib.auth.models import AbstractUser
from django.db import models
from ckeditor.fields import RichTextField


# Kế thừa lớp user của django để sử dụng các chức năng chứng thực của nó
class User(AbstractUser):
    """
    Những trường có sẵn từ AbstractUser: id, password, last_login, is_superuser,
    username, first_name, last_name, email, is_staff, is_active, date_joined
    """
    phone = models.CharField(max_length=15)
    avatar = models.ImageField(upload_to='upload/%Y/%m')
    about = models.TextField(blank=True)


# User với vai trò là Quản trị viên
class SysAdmin(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    log = models.TextField(blank=True)


# User với vai trò là Nhà tuyển dụng
class Hiring(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    company_name = models.CharField(max_length=100, null=False)
    address = models.CharField(max_length=150, null=False)
    company_size = models.IntegerField()
    avg_rating = models.FloatField()


# User với vai trò là Ứng viên
class Applicant(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )

    category = None
    skill = None
    exp = None

    title = models.CharField(max_length=50)
    birthday = models.DateField()
    address = models.CharField(max_length=150)


# Thông tin các offer được gửi nhận trong hệ thống. Báo cáo thống kê
class Tracking(models.Model):
    # Trường const static để ghi nhận các trạng thái của công việc
    OPENNING = 'O'
    CLOSED = 'C'
    VIOLATED = 'V'
    STATUS_CHOICES = [
        (OPENNING, 'Openning'),
        (CLOSED, 'Closed'),
        (VIOLATED, 'Violated'),
    ]
    # Trường static để ghi nhận loại offer đang được gửi trong hệ thống
    HIRING_TO_APPLICANT = 'H2A'
    APPLICANT_TO_HIRING = 'A2H'
    SENDING_TYPE = [
        (HIRING_TO_APPLICANT, 'Hiring to applicant'),
        (APPLICANT_TO_HIRING, 'Applicant to hiring'),
    ]

    applicant = models.ForeignKey(Applicant, on_delete=models.SET_NULL)
    job = models.ForeignKey('Job', on_delete=models.SET_NULL)
    status = models.CharField(
        max_length=1,
        choices=STATUS_CHOICES,
        default=OPENNING,
    )
    issue_date = models.DateField()
    end_date = models.DateField()
    sending_type = models.CharField(
        max_length=3,
        choices=SENDING_TYPE,
    )


# Thông tin các bảng tin tuyển dụng được tạo
class Job(models.Model):
    hiring = models.ForeignKey(Hiring, on_delete=models.CASCADE)
    offer = None
    exp = None
    skill = None
    category = None
    created_at = models.DateField(auto_now_add=True)
    closed_at = models.DateField()
    ref_language = models.CharField()
    content = RichTextField()
    active = models.BooleanField(default=True)


# Thông tin các bài viết đánh giá
class Review(models.Model):
    hiring = models.ForeignKey(Hiring, on_delete=models.SET_NULL)
    applicant = models.ForeignKey(Applicant, on_delete=models.SET_NULL)
    content = RichTextField()
    rate = models.FloatField()


# Thông tin các ngành nghề vd: xây dựng, làm đẹp,...
class Category(models.Model):
    name = models.CharField(max_length=50)


# Thông tin các nhóm kỹ năng (để lọc thông tin hiệu quả)
class Skill(models.Model):
    name = models.TextField(max_length=50)


# Thông tin các chế độ phúc lợi, bảo hiểm (có thể thêm bớt, thay đổi)
class Offer(models.Model):
    name = models.TextField(max_length=50)


# Thông tin các mức độ kinh nghiệm (mới ra trường, thực tập sinh,...)
class Experience(models.Model):
    name = models.TextField(max_length=80)
