package com.nocountry.appintercambiolibros.util;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static com.nocountry.appintercambiolibros.util.RolePermission.*;

@Getter
@AllArgsConstructor
public enum Role {
    USUARIO(Arrays.asList(
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
            DELETE_COMENTARIO
            )),

    ADMINISTRADOR(Arrays.asList(
            READ_ALL_USUARIOS,
            READ_ONE_USUARIO,
            READ_IMAGEN_PERFIL
    ));

    private List<RolePermission> permisos;

    Role() {
        this.permisos =new ArrayList<>();
    }
}
