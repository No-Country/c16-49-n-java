package com.nocountry.appintercambiolibros.util;

import lombok.Getter;

@Getter
public enum RolePermission {

    READ_IMAGEN_PERFIL,
    READ_ALL_LIBROS,
    READ_ONE_LIBRO,
    CREATE_RESENIA,
    UPDATE_RESENIA,
    DELETE_RESENIA,

    READ_USUARIO_LIBRO,
    CREATE_LIBRO,
    BUSCAR_LIBRO_GENERO,
    CREATE_COMENTARIO,
    UPDATE_COMENTARIO,
    DELETE_COMENTARIO,

    READ_ONE_USUARIO,
    READ_ALL_USUARIOS

}
