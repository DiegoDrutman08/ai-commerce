# forms.py
from django import forms

class ContactoForm(forms.Form):
    name = forms.CharField(max_length=100, label='Nombre')
    email = forms.EmailField(max_length=100, label='Correo Electrónico')
    subject = forms.CharField(max_length=500, label='Asunto')
    message = forms.CharField(widget=forms.Textarea, label='Mensaje')