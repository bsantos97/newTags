from django.db import models

# Create your models here.

class Rol (models.Model):
    IDRol=models.CharField(max_length=20)
    Nombre=models.CharField(max_length=30)


class User (models.Model):
    IDUser=models.CharField(max_length=10)
    Nombre=models.CharField(max_length=30)
    Email=models.CharField(max_length=70)
    Password=models.CharField(max_length=20)
    Pais=models.CharField(max_length=30)
    Rol=models.ForeignKey(Rol,null=False,blank=False,on_delete=models.PROTECT)


class Locacion (models.Model):
    IDLocacion=models.CharField(max_length=10)
    Latitud=models.FloatField()
    Longitud=models.FloatField()
    Ciudad=models.CharField(max_length=30)
    Pais=models.CharField(max_length=30)


class Proyecto (models.Model):
    IDProyecto=models.CharField(max_length=20)
    nombreProyecto=models.CharField(max_length=30)


class Tweet (models.Model):
    IDTweet=models.CharField(max_length=10)
    IDConversacion=models.CharField(max_length=10)
    Texto=models.CharField(max_length=100)
    Fecha=models.DateField()
    Locacion=models.ForeignKey(Locacion,null=False,blank=False,on_delete=models.PROTECT)
    Proyecto=models.ForeignKey(Proyecto,null=False,blank=False,on_delete=models.PROTECT)


class UserProyecto (models.Model):
    User=models.ForeignKey(User,null=False,blank=False,on_delete=models.PROTECT)
    Proyecto=models.ForeignKey(Proyecto,null=False,blank=False,on_delete=models.PROTECT)


class Categoria (models.Model):
    IDCategoria=models.CharField(max_length=20)
    Nombre=models.CharField(max_length=30)



class Etiqueta (models.Model):
    IDEtiqueta=models.CharField(max_length=20)
    Nombre=models.CharField(max_length=30)
    Categoria=models.ForeignKey(Categoria,null=False,blank=False,on_delete=models.PROTECT)



class TweetEtiqueta (models.Model):
    Tweet=models.ForeignKey(Tweet,null=False,blank=False,on_delete=models.PROTECT)
    Etiqueta=models.ForeignKey(Etiqueta,null=False,blank=False,on_delete=models.PROTECT)




