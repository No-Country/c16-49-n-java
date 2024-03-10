--USUARIOS
INSERT INTO usuarios (nombre, email, fecha_creacion, password, role) VALUES ('frankenstein', 'nstei@gmail.com', NOW() , '$2a$10$5kRDQSmUeUDoroBwx.s4K.2avo38jq.XVS8NWfSR2I3wsEqJmTu9C', 'USUARIO');
INSERT INTO usuarios (nombre, email, fecha_creacion, password, role) VALUES ('Rambo', 'rambo@gmail.com', NOW() , '$2a$10$5kRDQSmUeUDoroBwx.s4K.2avo38jq.XVS8NWfSR2I3wsEqJmTu9C', 'USUARIO');
INSERT INTO usuarios (nombre, email, fecha_creacion, password, role) VALUES ('PlateBible', 'eBibl@gmail.com', NOW() , '$2a$10$5kRDQSmUeUDoroBwx.s4K.2avo38jq.XVS8NWfSR2I3wsEqJmTu9C', 'USUARIO');
INSERT INTO usuarios (nombre, email, fecha_creacion, password, role) VALUES ('BlueAlto', 'ueAlto@gmail.com', NOW() , '$2a$10$5kRDQSmUeUDoroBwx.s4K.2avo38jq.XVS8NWfSR2I3wsEqJmTu9C', 'USUARIO');
INSERT INTO usuarios (nombre, email, fecha_creacion, password, role) VALUES ('ProteinDolphin', 'einDolphi@gmail.com', NOW() , '$2a$10$5kRDQSmUeUDoroBwx.s4K.2avo38jq.XVS8NWfSR2I3wsEqJmTu9C', 'USUARIO');
INSERT INTO usuarios (nombre, email, fecha_creacion, password, role) VALUES ('SymbolicLovecraft', 'mboli@gmail.com', NOW() , '$2a$10$5kRDQSmUeUDoroBwx.s4K.2avo38jq.XVS8NWfSR2I3wsEqJmTu9C', 'USUARIO');
INSERT INTO usuarios (nombre, email, fecha_creacion, password, role) VALUES ('SunrisePassion', 'assi@gmail.com', NOW() , '$2a$10$5kRDQSmUeUDoroBwx.s4K.2avo38jq.XVS8NWfSR2I3wsEqJmTu9C', 'USUARIO');
INSERT INTO usuarios (nombre, email, fecha_creacion, password, role) VALUES ('NickelStability', 'tability@gmail.com', NOW() , '$2a$10$5kRDQSmUeUDoroBwx.s4K.2avo38jq.XVS8NWfSR2I3wsEqJmTu9C', 'USUARIO');
INSERT INTO usuarios (nombre, email, fecha_creacion, password, role) VALUES ('MacroBook', 'macro@gmail.com', NOW() , '$2a$10$5kRDQSmUeUDoroBwx.s4K.2avo38jq.XVS8NWfSR2I3wsEqJmTu9C', 'USUARIO');

--ADMINISTRADORES
INSERT INTO usuarios (nombre, email, password, role, fecha_creacion) VALUES ('Pablo', 'pablo@gmail.com','$2a$10$5kRDQSmUeUDoroBwx.s4K.2avo38jq.XVS8NWfSR2I3wsEqJmTu9C','ADMINISTRADOR', NOW());
INSERT INTO usuarios (nombre, email, password, role, fecha_creacion) VALUES ('Yormaris', 'yormaris@gmail.com','$2a$10$Eh9rRKwEmqYRKdso87LVieKOwp.IAeAaa1j2MZoiBe1yubHzluLya','ADMINISTRADOR', NOW());
INSERT INTO usuarios (nombre, email, password, role, fecha_creacion) VALUES ('Matías', 'matias@gmail.com','$2a$10$pyInlLytF7uIIM3Szr1Gtu3g.bYIGJwkYpFxNIvTCzSktKM982vyq','ADMINISTRADOR', NOW());
--USUARIO CON CONTRA
INSERT INTO usuarios (nombre, email, password, role, fecha_creacion) VALUES ('Mariana', 'mariana@gmail.com','$2a$10$9l6A6zhoZplJAbOvLTkjOOIPIDw4ZRZC.1LwlT57.K7thOtPShan.','USUARIO', NOW());

--LIBROS
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
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (3.0, 1, 2)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (4.0, 1, 3)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (5.0, 1, 4)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (1.0, 2, 2)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (2.0, 3, 6)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (3.7, 3, 2)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (4.0, 3, 4)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (3.5, 3, 5)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (3.0, 5, 1)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (4.0, 5, 2)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (3.0, 5, 4)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (4.0, 5, 5)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (2.0, 5, 6)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (3.0, 5, 7)
INSERT INTO resenias (calificacion, libro_id, usuario_id) VALUES (4.0, 5, 8)


--COMENTARIOS
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 1, 1, 'Lo recomiendo para introducirse al género')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 7, 1, 'No me convenció del todo')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 2, 1, 'Me gustó, pero esperaba más')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 3, 1, 'Una lectura entretenida')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 4, 1, 'Excelente libro, lo recomiendo totalmente')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 2, 2, 'No lo recomiendo')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 6, 3, 'Le falta mejorar')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 2, 3, 'Me gustó la historia pero algunos giros fueron predecibles')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 4, 3, 'Personajes bien desarrollados y una trama que te atrapa desde el principio')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 5, 3, 'Una lectura interesante, aunque esperaba un poco más de acción')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 1, 5, 'Muy intrigante, me mantuvo enganchado hasta el final')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 2, 5, 'Una trama bien desarrollada y personajes interesantes')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 4, 5, 'Me gustó mucho, lo recomendaría sin dudarlo')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 5, 5, 'Excelente libro, lo disfruté de principio a fin')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 6, 5, 'No me convenció del todo, esperaba más')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 7, 5, 'Entretenido pero predecible en algunos aspectos')
INSERT INTO comentarios (fecha_de_creacion, usuario_id, libro_id, contenido) VALUES (NOW(), 8, 5, 'Uno de los mejores libros que he leído en mucho tiempo')

