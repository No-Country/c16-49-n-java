import React from "react";
import '../estilos/textoHero.css'
function TextoHero() {

    return (
        <>
            <div className="text">
                <svg>
                    <defs>
                        <mask id="mask" x="0" y="0" width="100%" height="100%" >

                            <rect id="alpha" x="0" y="0" width="100%" height="100%" />
N
                            <text id="title" x="50%" y="0" dy="1.58em">Páginas Compartidas</text>
                            <text id="subtitle" x="50%" y="0" dy="9.8em">Cada libro, una conexión:</text>
                            <text id="subtitle" x="50%" y="20" dy="9.8em">forma parte de una comunidad de lectores apasionados</text>
                        </mask>
                    </defs>

                    <rect id="base" x="0" y="0" width="100%" height="100%" />
                </svg>
            </div>

            <section className="intro"></section>
        </>
    )
}
export default TextoHero;