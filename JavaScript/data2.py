import pyodbc

#definir parametos de coneccion

server = 'your_server_name'
database = 'your_database_name'
username = 'your_username'
password = 'your_password'

#crear conexion
connection = pyodbc.Connection(
    'DRIVER = {SQL Server};'
    'SERVER='{server}
    'DATABASE=' + database + ';'
    'UID=' + username + ';'
    'PWD=' + password 
)

#crear cursor

cursor = connection.cursor()

#ejecutar consulta
cursor.execute('SELECT * FROM tabla')

#leer resultados
rows = cursor.fetchall()

for row in rows:
    print(row)

#cerrar conexion
connection.close()