"""
Tập tin cấu hình một app trong django, để sử dụng app này phải khai báo trong
settings.py mục INSTALLED_APPS
"""
from django.apps import AppConfig


class EmploymentAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'employment_app'
