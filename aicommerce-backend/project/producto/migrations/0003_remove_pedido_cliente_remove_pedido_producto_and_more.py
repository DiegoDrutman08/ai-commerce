# Generated by Django 5.0.6 on 2024-05-31 19:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('producto', '0002_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pedido',
            name='cliente',
        ),
        migrations.RemoveField(
            model_name='pedido',
            name='producto',
        ),
        migrations.RemoveField(
            model_name='pedido',
            name='vendedor',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='user',
        ),
        migrations.DeleteModel(
            name='Cliente',
        ),
        migrations.DeleteModel(
            name='Pedido',
        ),
        migrations.DeleteModel(
            name='Vendedor',
        ),
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]