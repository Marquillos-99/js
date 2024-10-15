import pymysql # libreria

class Database:
    def __init__(self):
        self.connection = pymysql.connect(
            host='localhost', #ubicacion base datos
            user='root', #nombre usuario
            password='password', #contraseña
            db='test_db') #nombre de la base de datos
        self.cursor = self.connection.cursor()
        print("Conexion establecida exitosamente");


Database = Database()