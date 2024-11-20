# Generated by Django 4.1.6 on 2023-04-23 17:17

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0030_alter_academy_admission_tbl_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='academy_admission_tbl',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2023, 4, 23, 22, 47, 42, 832505)),
        ),
        migrations.AlterField(
            model_name='book_event_tbl',
            name='bookingdate',
            field=models.DateTimeField(default=datetime.datetime(2023, 4, 23, 22, 47, 42, 832505)),
        ),
        migrations.AlterField(
            model_name='booking',
            name='arrival_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 4, 30, 22, 47, 42, 832505)),
        ),
        migrations.AlterField(
            model_name='booking',
            name='order_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 4, 23, 22, 47, 42, 832505)),
        ),
    ]