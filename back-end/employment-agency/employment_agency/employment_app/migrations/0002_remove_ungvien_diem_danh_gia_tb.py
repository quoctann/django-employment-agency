# Generated by Django 3.2.5 on 2021-09-19 10:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('employment_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ungvien',
            name='diem_danh_gia_tb',
        ),
    ]