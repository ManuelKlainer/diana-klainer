import React from 'react';
import '../styles/Bio.css';


function Bio() {
    return (
        <main className="bio-main">
            <section className="bio-title">
                <h3>Diana Klainer</h3>
            </section>
            <section className='bio-container'>
                <img src="/img/bio/Bio.jpg"
                    alt="Diana Klainer"
                    className='bio-image'
                />
                <div className="bio-text">
                    <p>Nace en Buenos Aires en 1967. Es egresada de la Escuela Nacional de Bellas Artes Prilidiano Pueyrredón, en la especialidad escultura. Realizó seminarios y talleres con Alejandro Vainzstein, Eduardo Gil, Juan Carlos Distéfano, Leo Vinci , Aurelio Macchi, Jorge Gamarra, Gastón Breyer, Antonio Pujía, Raúl Pájaro Gómez, entre otros.</p>
                    <p>Participó en muestras individuales y colectivas entre las que se destacan: “Ellos daban vueltas, vueltas, vueltas…” (La vidriera,  Espacio de Arte Fundación Osde, 2018), “Quememos todo” (Petit Gallerie, Centro Cultural Morán, 2018),  Latido Home Hotel (2018),  Una Obra un artista (2015), Salón Nacional de Artes Plásticas (Palais de Glace, 2014), Salón de Artes Plásticas Manuel Belgrano ( Museo Sívori, 2025,  2023,  2020,  2011, 2009, 2002, 2001, 1999), “Retratos” ( Perotti Galería de Arte, 2012), “Planetapatín II” (CCEBA Centro Cultural de España en Buenos Aires 2009), “Un día Cualquiera” ( Museo Provincial de Artes, Santa Rosa, La Pampa, 2009), “Planetapatín” (Palacio Nacional de las Artes- Palais de Glace, 2009), Instalación (FM La Tribu, 2006) ,”Muestralacartera” (Espacio Giesso Reich,  1998), El Bastión del Carmen (Colonia, Uruguay, 1997) , Instituto Goethe ( 1994) , Casa de Castagnino (1994),   La Barra del Puerto ( Paraná, Entre Ríos, 1993) , Museo Histórico Sarmiento (1993), Casa de la Provincia de San Juan (1993), Centro Cultural Recoleta (1993).</p>
                    <p>En 2014 obtiene el Segundo Premio de escultura en el Salón Nacional de Artes Visuales. Obtiene el Premio Mención en Escultura en el Salón de Artes Plásticas Manuel Belgrano (1999).</p>
                    <p>Vive y trabaja en Buenos Aires.</p>
                </div>
            </section>
        </main>
        
    )
}

export default Bio;