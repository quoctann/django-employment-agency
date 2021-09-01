# Tập tin này dùng để cấu hình các model ánh xạ xuống cơ sở dữ liệu
from django.contrib.auth.models import AbstractUser
from django.db import models
from ckeditor.fields import RichTextField

# Ghi chú: Các trường của model default null=False


# Kế thừa lớp user của django để sử dụng các chức năng chứng thực của nó
class User(AbstractUser):
    """
    Những trường có sẵn từ AbstractUser: id, password, last_login, is_superuser,
    username, first_name, last_name, email, is_staff, is_active, date_joined
    """
    phone = models.CharField(max_length=15, null=True)
    avatar = models.ImageField(upload_to='static/upload/%Y/%m', null=True)


# User với vai trò là Quản trị viên
class SysAdmin(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    log = models.TextField(null=True)


# User với vai trò là Nhà tuyển dụng
class Hiring(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    company_name = models.CharField(max_length=100)
    address = models.CharField(max_length=150)
    company_size = models.IntegerField()
    avg_rating = models.FloatField(default=0.0)
    pending_approval = models.BooleanField(default=True)
    about = RichTextField(null=True)


# User với vai trò là Ứng viên
class Applicant(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    categories = models.ManyToManyField('Category')
    skills = models.ManyToManyField('Skill')
    experiences = models.ManyToManyField('Experience')
    title = models.CharField(max_length=50, null=True)
    birthday = models.DateField(null=True)
    address = models.CharField(max_length=150, null=True)
    cv = models.FileField(upload_to='static/upload/%Y/%m', null=True)
    about = RichTextField(null=True)


# Thông tin các offer được gửi nhận trong hệ thống. Báo cáo thống kê
class Tracking(models.Model):
    # Trường static ghi nhận trạng thái của yêu cầu (offer) đang được phát sinh
    PENDING = 'PEN'
    ACCEPTED = 'ACC'
    REJECTED = 'REJ'
    REPORTED = 'REP'
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (ACCEPTED, 'Accepted'),
        (REJECTED, 'Rejected'),
        (REPORTED, 'Reported'),
    ]
    # Trường static để ghi nhận loại offer đang được gửi trong hệ thống
    HIRING_TO_APPLICANT = 'H2A'
    APPLICANT_TO_HIRING = 'A2H'
    SENDING_TYPE = [
        (HIRING_TO_APPLICANT, 'Hiring to applicant'),
        (APPLICANT_TO_HIRING, 'Applicant to hiring'),
    ]

    applicant = models.ForeignKey(Applicant, on_delete=models.SET_NULL, null=True)
    job = models.ForeignKey('Job', on_delete=models.SET_NULL, null=True)
    status = models.CharField(
        max_length=3,
        choices=STATUS_CHOICES,
        default=PENDING,
    )
    issue_date = models.DateField()
    sending_type = models.CharField(
        max_length=3,
        choices=SENDING_TYPE,
    )


# Thông tin các bảng tin tuyển dụng được tạo
class Job(models.Model):
    hiring = models.ForeignKey(Hiring, on_delete=models.CASCADE)
    offer = models.ManyToManyField('Offer')
    categories = models.ManyToManyField('Category')
    skills = models.ManyToManyField('Skill')
    experiences = models.ManyToManyField('Experience')
    created_at = models.DateField(auto_now_add=True)
    expired_at = models.DateField(null=True)
    content = RichTextField()
    title = models.CharField(max_length=60)
    active = models.BooleanField(default=True)


# Thông tin các bài viết đánh giá
class Review(models.Model):
    hiring = models.ForeignKey(Hiring, on_delete=models.SET_NULL, null=True)
    applicant = models.ForeignKey(Applicant, on_delete=models.SET_NULL, null=True)
    content = RichTextField()
    rate = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


# Thông tin các ngành nghề vd: xây dựng, làm đẹp,...
class Category(models.Model):
    name = models.CharField(max_length=50)


# Thông tin các nhóm kỹ năng (để lọc thông tin hiệu quả)
class Skill(models.Model):
    name = models.TextField(max_length=50)


# Thông tin các chế độ phúc lợi, bảo hiểm (có thể thêm bớt, thay đổi)
class Offer(models.Model):
    name = models.TextField(max_length=50)


# Thông tin các mức độ kinh nghiệm (thực tập sinh, quản lý cao cấp,...)
class Experience(models.Model):
    name = models.TextField(max_length=80)
