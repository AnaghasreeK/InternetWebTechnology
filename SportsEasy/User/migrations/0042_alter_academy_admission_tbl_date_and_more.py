# Generated by Django 4.1.6 on 2023-04-28 07:20

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0041_alter_academy_admission_tbl_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='academy_admission_tbl',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2023, 4, 28, 12, 50, 45, 856211)),
        ),
        migrations.AlterField(
            model_name='book_event_tbl',
            name='bookingdate',
            field=models.DateTimeField(default=datetime.datetime(2023, 4, 28, 12, 50, 45, 855698)),
        ),
        migrations.AlterField(
            model_name='booking',
            name='arrival_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 5, 5, 12, 50, 45, 853528)),
        ),
        migrations.AlterField(
            model_name='booking',
            name='order_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 4, 28, 12, 50, 45, 853528)),
        ),
        migrations.AlterField(
            model_name='turf_booking_tbl',
            name='tdate',
            field=models.DateTimeField(default=datetime.datetime(2023, 4, 28, 12, 50, 45, 856211)),
        ),
    ]
