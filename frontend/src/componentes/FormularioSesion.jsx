import { Password } from "@mui/icons-material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import '../estilos/formulariosesion.css';

function FormSesion() {
    // define los datos a capturar
    const [datosForm, setDatosForm] = useState({
        email: "",
        password: ""
    })
    // array para almacenar errores
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    // agrega los datos ingresados en la constante de datos
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatosForm({ ...datosForm, [name]: value });
    };
    // activa la validacion al hacer submit
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validación de datos de entrada al formulario
        let newErrors = {};
        // Verificar si algún campo está vacio
        if (datosForm.email === "") {
            newErrors.email = "El campo Email es obligatorio";
        }
        if (datosForm.password === "") {
            newErrors.password = "Debe ingresar su contraseña";
        }
        // Si hay campos vacíos, mostrar errores y detener la validación
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            Swal.fire({
                title: 'Error!',
                text: Object.values(newErrors).join("\n"), // Une todos los mensajes de error en una sola cadena',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return;
        }

        // Verificar el campo email
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(datosForm.email)) {
            newErrors.email = "Email inválido, por favor verifique";
        }

        // Validación de la contraseña al menos 8 caracteres, una letra y un numero
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!regex.test(datosForm.password)) {
            newErrors.password = "La contraseña debe tener al menos 8 caracteres, al menos una letra y un número"
        }
        setErrors(newErrors);
        // Envío del formulario si no hay errores
        if (Object.keys(newErrors).length === 0) {
            // INGRESAR CODIGO PARA ENVIAR EL FORMULARIO AL BACKEND
            console.log("Datos del formulario:", datosForm);
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: Object.values(newErrors).join("\n"), // Une todos los mensajes de error en una sola cadena',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
            <h1 style={{ marginTop: 100 }}>Inicia Sesion</h1>
                <div className="filas">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input className="form-control" type="email" id="email" name="email" placeholder="maria@mail.com"
                        value={datosForm.email}
                        onChange={handleChange} />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="filas">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password"
                        value={datosForm.password}
                        onChange={handleChange} />
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
                <div className="filas">
                    <button type="submit" className="">Iniciar Sesion</button>
                </div>
            </form>
        </>


    )
}
export default FormSesion;