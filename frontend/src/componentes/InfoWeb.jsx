import React from "react";
import '../estilos/infoWeb.css';
import { Typography } from "@mui/material";

function InfoWeb() {
    return (
        <>
            <div className="contenedorGeneral">
                <div className="izquierda">
                    <div className="fondoIzquierda">
                        <div className="contenedorGaleria">
                            <img src='https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2Fpexels-yan-krukau-8199621.jpg?alt=media&token=724ad458-b800-4def-adcd-84b729aedb85'></img>
                        </div>
                        <div className="contenedorGaleria">
                            <img src="https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2Fpexels-koshevayak-4170628.jpg?alt=media&token=2fe685a4-9227-4bcc-98e4-514d74bb60b3"></img>
                        </div>
                        <div className="contenedorGaleria">
                            <img src="https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2Fpexels-nubia-navarro-(nubikini)-1517355.jpg?alt=media&token=67c1900a-e540-4053-b8fc-18be61af4f94"></img>
                        </div>
                        <div className="contenedorGaleria">
                            <img src="https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2Fpexels-andrea-piacquadio-3769708.jpg?alt=media&token=32a65f5b-6a8d-420b-a5cf-502ace5efb21"></img>
                        </div>
                        <div className="contenedorGaleria">
                            <img src="https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2Fpexels-karolina-grabowska-6328831.jpg?alt=media&token=c36077ce-6aaf-4c0f-b50f-775a2b98f526"></img>
                        </div>
                    </div>
                </div>
                <div className="derecha">
                    <div className="tituloBienvenida">
                        <Typography variant="h1">Bienvenido a Páginas Compartidas</Typography>
                        <Typography variant="h5" sx={{ textAlign: 'center' }}>¡La Web de Intercambio de Libros para lectores como tú!</Typography>
                    </div>
                    <div className="contenedorTexto">
                        <Typography variant="body1">Creemos que la lectura no sólo es una actividad que nos permite 
                        explorar mundos alternativos, expandir nuestros horizontes y nutrir nuestra mente, sino que 
                        también tiene el poder de unirnos como comunidad.</Typography>
                    </div>
                    <div className="contenedorTexto">
                        <Typography variant="body1">Comparte la experiencia de la lectura y a la vez crea lazos más allá 
                        de las páginas de un libro, conecta con otros amantes de la literatura, y súmate a la red de 
                        conocimiento compartido. </Typography>
                    </div>
                    <div className="contenedorTexto">
                        <Typography variant="body1">En esta Web puedes ser parte de una comunidad de Intercambio de Libros en tu Ciudad</Typography>
                    </div>
                    <div className="preguntas"><Typography variant="h5">¿Cómo intercambio libros en Páginas Compartidas?</Typography></div>
                    <div className="contenedorTexto">
                        <Typography variant="body1">Imagina una biblioteca virtual donde puedes explorar una amplia 
                        selección de libros de segunda mano, todos en excelente estado y listos para ser compartidos. 
                        Navega por el <span>Catálogo de Libros</span> y conoce los títulos disponibles.
                       </Typography>
                    </div>
                    <div className="preguntas"><Typography variant="h5">Registrate</Typography></div>
                    <div className="contenedorTexto">
                        <Typography variant="body1">Completa tu registro en simples pasos y empieza a crear tu Librería.
                        ¿Tienes un montón de libros guardados que ya no lees? ¡Anímate a intercambiarlos!
                        Crea tu librería virtual y carga los libros que tienes y quieres compartir. La comunidad podrá explorar
                        tus lecturas y encontrar aquellos que le apasionan</Typography>
                    </div>
                    <div className="preguntas"><Typography variant="h5">Arma tu lista de Deseos</Typography></div>
                    <div className="contenedorTexto">Explora las librerías de otros usuarios. 
                    Encuentra los libros que quisieras leer y solicita intercambio</div>
                    <div className="preguntas"><Typography variant="h5">Intercambia tus Libros</Typography></div>
                    <div className="contenedorTexto">¿Ya solicitaste un intercambio?Chatea con los lectores y organiza 
                    una <span>Date de Intercambio</span> </div>
                    <div className="preguntas"><Typography variant="h5">¡Eso no es todo!</Typography></div>
                    <div className="contenedorTexto">También encontrarás reseñas y recomendaciones de otros lectores apasionados como tú. 
                    Conecta con personas que comparten tus mismos intereses y descubre nuevas perspectivas sobre tus libros favoritos
                    <span>¡Ya estás creando Red! </span></div>

                </div>
            </div>
        </>

    )
}
export default InfoWeb;