INSERT INTO libros (isbn, titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('9780132350884', 'Clean Code', 'Robert C. Martin', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Programming', 'NUEVO', 'clean_code.jpg', NOW());
INSERT INTO libros (isbn, titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('8780132350884', 'La vidente', 'Lars Kepler', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Programming', 'NUEVO', 'la_vidente.jpg', NOW());
INSERT INTO libros (isbn, titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('7780132350884', 'El hipnotista', 'Lars Kepler', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Programming', 'NUEVO', 'la_hipnotista.jpg', NOW());
INSERT INTO libros (isbn, titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('6780132350884', 'Las manzanas', 'Aghata Cristie', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Programming', 'NUEVO', 'las_manzanas.jpg', NOW());
INSERT INTO libros (isbn, titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('5780132350884', 'Cita con la muerte', 'Aghata Cristie', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Programming', 'NUEVO', 'cita_con_la_muerte.jpg', NOW());
INSERT INTO libros (isbn, titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('4780132350884', 'El principito', 'Antoine de Saint-Exupéry', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Programming', 'NUEVO', 'el_principito.jpg', NOW());
INSERT INTO libros (isbn, titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('3780132350884', 'El hipnotista 2', 'Lars Kepler', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Programming', 'NUEVO', 'la_hipnotista_2.jpg', NOW());
INSERT INTO libros (isbn, titulo, autor, fecha_de_publicacion, resumen, editorial, paginas, genero, estado, nombre_imagen, fecha_de_creacion) VALUES ('2780132350884', 'La vidente 2', 'Lars Kepler', '2008-08-11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Prentice Hall', '464', 'Programming', 'NUEVO', 'la_vidente_2.jpg', NOW());

INSERT INTO usuarios (nombre, email, fecha_creacion, nombre_imagen, psword) VALUES ('frankenstein', 'hplover@gmail.com', NOW() , 'frank1.jpg', 'sh@d0w231')
INSERT INTO usuarios (nombre, email, fecha_creacion, nombre_imagen, psword) VALUES ('Rambo', 'hplover@gmail.com', NOW() , 'frank1.jpg', 'sh@d0w231')

INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (4.0, 1, 1)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (1.0, 2, 2)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (2.0, 3, 1)