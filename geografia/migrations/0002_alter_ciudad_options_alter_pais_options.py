# Generated by Django 5.1 on 2024-08-19 00:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("geografia", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="ciudad",
            options={"verbose_name": "ciudad", "verbose_name_plural": "ciudades"},
        ),
        migrations.AlterModelOptions(
            name="pais",
            options={"verbose_name": "país", "verbose_name_plural": "países"},
        ),
    ]
