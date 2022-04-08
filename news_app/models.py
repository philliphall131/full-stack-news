from django.db import models
from django.contrib.auth.models import AbstractUser

class AppUser(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
        null = True,
        blank = True
    )


class Preference(models.Model):

  user = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name="user_preference")
  name = models.CharField(max_length=255)
  label = models.CharField(max_length=255)
  value = models.CharField(max_length=255)

  def __str__(self):
    return f"""
      {self.label}: {self.value}
    """
