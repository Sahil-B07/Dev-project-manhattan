# Generated by Django 4.1.7 on 2023-08-05 08:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("api", "0003_alter_book_book_authors_alter_book_book_title"),
    ]

    operations = [
        migrations.CreateModel(
            name="ReadingHistory",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "progress",
                    models.PositiveIntegerField(
                        default=0, help_text="Reading progress in percentage"
                    ),
                ),
                (
                    "book",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="api.book"
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "unique_together": {("user", "book")},
            },
        ),
    ]