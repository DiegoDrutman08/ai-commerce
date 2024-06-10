from django.db import models

class Contacto(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=500, default="Default Subject")
    message = models.TextField()

    def __str__(self):
        return self.name
