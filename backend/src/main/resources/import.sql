INSERT INTO usuarios (nombre, email, fecha_creacion, nombre_imagen, password) VALUES ('frankenstein', 'nstei@gmail.com', NOW() , 'frank1.jpg', 'sh@d0w231')
INSERT INTO usuarios (nombre, email, fecha_creacion, nombre_imagen, password) VALUES ('Rambo', 'rambo@gmail.com', NOW() , 'frank1.jpg', 'H8lH,o5C1e')
INSERT INTO usuarios (nombre, email, fecha_creacion, nombre_imagen, password) VALUES ('PlateBible', 'eBibl@gmail.com', NOW() , 'frank1.jpg', 'ej31ds')
INSERT INTO usuarios (nombre, email, fecha_creacion, nombre_imagen, password) VALUES ('BlueAlto', 'ueAlto@gmail.com', NOW() , 'frank1.jpg', '24@fe')
INSERT INTO usuarios (nombre, email, fecha_creacion, nombre_imagen, password) VALUES ('ProteinDolphin', 'einDolphi@gmail.com', NOW() , 'frank1.jpg', '!!reee32')
INSERT INTO usuarios (nombre, email, fecha_creacion, nombre_imagen, password) VALUES ('SymbolicLovecraft', 'mboli@gmail.com', NOW() , 'frank1.jpg', 'roma-12s')
INSERT INTO usuarios (nombre, email, fecha_creacion, nombre_imagen, password) VALUES ('SunrisePassion', 'assi@gmail.com', NOW() , 'frank1.jpg', 'elvis1M')
INSERT INTO usuarios (nombre, email, fecha_creacion, nombre_imagen, password) VALUES ('NickelStability', 'tability@gmail.com', NOW() , 'frank1.jpg', 'cattt1')
INSERT INTO usuarios (nombre, email, fecha_creacion, nombre_imagen, password) VALUES ('MacroBook', 'macro@gmail.com', NOW() , 'frank1.jpg', 's0meth!ng')


INSERT INTO libros (isbn, usuario_id,  titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('9780132350884', 5 ,'Clean Code',  'Robert C. Martin', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Programming', 'NUEVO', 'clean_code.jpg', NOW());
INSERT INTO libros (isbn, usuario_id,  titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('8780132350884', 3 ,'La vidente',  'Lars Kepler', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Policiaca', 'NUEVO', 'la_vidente.jpg', NOW());
INSERT INTO libros (isbn, usuario_id,  titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('7780132350884', 1 ,'El hipnotista',  'Lars Kepler', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Policiaca', 'NUEVO', 'la_hipnotista.jpg', NOW());
INSERT INTO libros (isbn, usuario_id,  titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('6780132350884', 1 ,'Las manzanas', 'Aghata Cristie', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Policiaca', 'NUEVO', 'las_manzanas.jpg', NOW());
INSERT INTO libros (isbn, usuario_id,  titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('5780132350884', 4 ,'Cita con la muerte', 'Aghata Cristie', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Policiaca', 'NUEVO', 'cita_con_la_muerte.jpg', NOW());
INSERT INTO libros (isbn, usuario_id,  titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('4780132350884', 5 ,'El principito',  'Antoine de Saint-Exupéry', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Aventura', 'NUEVO', 'el_principito.jpg', NOW());
INSERT INTO libros (isbn, usuario_id,  titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('3780132350884', 3 ,'El hipnotista 2', 'Lars Kepler', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Policiaca', 'NUEVO', 'la_hipnotista_2.jpg', NOW());
INSERT INTO libros (isbn, usuario_id,  titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('2780132350884', 2 ,'La vidente 2', 'Lars Kepler', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Policiaca', 'NUEVO', 'la_vidente_2.jpg', NOW());

--RESEÑAS
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (4.0, 1, 1)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (2.0, 1, 7)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (1.0, 2, 2)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (2.0, 3, 6)

