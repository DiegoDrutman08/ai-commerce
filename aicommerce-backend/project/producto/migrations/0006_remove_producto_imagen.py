# Generated by Django 5.0.4 on 2024-06-11 14:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('producto', '0005_delete_informacioncontacto_remove_producto_email_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='producto',
            name='imagen',
        ),
    ]
