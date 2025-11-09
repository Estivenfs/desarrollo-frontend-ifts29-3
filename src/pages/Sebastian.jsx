import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import MediaCard from '../components/mediacard/Mediacard';
import '../css/sebastian.css';
import { usePageMetadata } from '../hooks/usePageMetadata';
import peliculas from '../data/peliculas.json';
import musica from '../data/musica.json';
import favicon from '../assets/favicon.png';
import sebastianPerfilImg from '../assets/sebastian-perfil.webp';
import imgScorpion from '../assets/sebastian-scorpion1.jpg';
import imgDontCry from '../assets/sebastian-dontcry.jpg';
import imgCreep from '../assets/sebastian-creep.jpg';
import imgNumb from '../assets/sebas-numb.jpg';
import imgTerminator2 from '../assets/sebastian-terminator2.jpg';
import imgBigShort from '../assets/sebastian-thebigshort1.jpg';
import imgAjeoosi from '../assets/sebastian-ajeoosi2.jpg';
import imgHackBoss from '../assets/sebastian-Como_Hackear_seu_Chefe3.jpg';

const assetMap = {
  'sebastian-scorpion1.jpg': imgScorpion,
  'sebastian-dontcry.jpg': imgDontCry,
  'sebastian-creep.jpg': imgCreep,
  'sebas-numb.jpg': imgNumb,
  'sebastian-terminator2.jpg': imgTerminator2,
  'sebastian-thebigshort1.jpg': imgBigShort,
  'sebastian-ajeoosi2.jpg': imgAjeoosi,
  'sebastian-Como_Hackear_seu_Chefe3.jpg': imgHackBoss,
};

// Helper para resolver rutas de assets definidas como "/src/assets/..." en JSON
const resolveAsset = (path) => {
  try {
    if (typeof path === 'string' && path.startsWith('/src/assets/')) {
      const fileName = path.split('/src/assets/')[1];
      if (assetMap[fileName]) return assetMap[fileName];
      // Fallback genérico
      const url = new URL(`../assets/${fileName}`, import.meta.url).href;
      return url;
    }
    return path;
  } catch (e) {
    return path;
  }
};

// Resolver imágenes de películas y música para funcionar en producción
const peliculasResolved = peliculas.map((p) => ({ ...p, imagen: resolveAsset(p.imagen) }));
const musicaResolved = musica.map((m) => ({ ...m, imagen: resolveAsset(m.imagen) }));

const Sebastian = () => {
  usePageMetadata("Sebastián - Perfil", favicon);

  const [rotationAngle, setRotationAngle] = useState(0);
  const [skillsColorChanged, setSkillsColorChanged] = useState(false);

  const rotarImagen = () => {
    setRotationAngle(prevAngle => prevAngle + 90);
  };

  const cambiarColoresHabilidades = () => {
    setSkillsColorChanged(!skillsColorChanged);
  };


  const habilidades = [
    'Mikrotik', 'Routing & Switching', 'VPN', 'Protocolos de Red', 
    'Seguridad de Red', 'Monitorización', 'Linux/Windows Server', 
    'PHP', 'Python', 'MySQL'
  ];

  return (
    <div className="sebastian-page">
      {/* Perfil Principal */}
      <section className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div className="card sebastian-profile-card shadow-lg ">
                <div className="card-body p-5 rounded-3">
                  <div className="row align-items-center">
                    <div className="col-lg-5 text-center mb-4 mb-lg-0 ">
                      <img 
                        src={sebastianPerfilImg} 
                        alt="Sebastián" 
                        className="sebastian-profile-img mb-3" 
                        style={{
                          transform: `rotate(${rotationAngle}deg)`,
                          transition: 'transform 0.5s ease'
                        }}
                      />
                      <h2 className="fw-bold text-dark">Sebastián</h2> 
                      <p className="text-muted mb-3">
                        <i className="bi bi-geo-alt-fill me-1"></i>Mendoza, Argentina
                      </p>
                      <p className="text-muted mb-3">
                        <i className="bi bi-calendar-event me-1"></i>42 años
                      </p>
                      {/* Botones con colores de tu paleta */}
                      <button className="btn btn-primary me-2" onClick={rotarImagen}>
                        <i className="bi bi-arrow-clockwise me-1"></i>Rotar imagen
                      </button>
                      {/* <button className="btn btn-primary" onClick={cambiarColoresHabilidades}>
                        <i className="bi bi-palette me-1"></i>Cambiar colores
                      </button> */}
                    </div>
                    
                    <div className="col-lg-7">
                      <h3 className="text-dark mb-3">Sobre mí</h3> 
                      <p className=" mb-4">
                        Soy administrador de redes especializado en infraestructura de TI y seguridad de redes. Mi pasión es diseñar, 
                        implementar y mantener redes eficientes y seguras que satisfagan las necesidades de las 
                        organizaciones. Disfruto resolviendo problemas complejos y optimizando el rendimiento de las redes 
                        para garantizar la máxima disponibilidad y seguridad de los datos.
                      </p>
                      
                      <h4 className="text-dark mb-3">Habilidades</h4> 
                      <div className="sebastian-skills-list mb-4">
                        {habilidades.map((habilidad, index) => (
                          <span 
                            key={index}
                            className={`sebastian-skill-tag ${skillsColorChanged ? 'sebastian-skill-colored' : ''}`}
                            style={{
                              backgroundColor: skillsColorChanged ? 
                                `hsl(${index * 36}, 70%, 50%)` : '#517fa4', 
                              color: 'white'
                            }}
                          >
                            {habilidad}
                          </span>
                        ))}
                      </div>

                      <h4 className="text-dark mb-3">Experiencia</h4> 
                      <div className="mb-4">
                        <h5 className="fw-bold text-dark">Infraestructura y Soporte</h5>
                        <p className="text-muted mb-2">Estudio jurídico • 2021 - Presente</p>
                        <p className="text-dark">Lideré el proyecto de implementación de la infraestructura de red y TI para un estudio jurídico. Mis responsabilidades incluyeron el cableado estructurado de todas las estaciones de trabajo, la instalación y configuración del software legal LEX en un servidor local, y el despliegue de una solución de acceso remoto seguro para permitir a los abogados trabajar desde cualquier ubicación. El resultado fue una mejora significativa en la eficiencia operativa y la colaboración del equipo.</p> 
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="fw-bold text-dark">Desarrollador web freelance</h5> 
                        <p className="text-muted mb-2">Estudio Contable • 2023</p>
                        <p className="text-dark">Diseñé y desarrollé una página web corporativa a medida para un estudio contable . El sitio destaca por su diseño profesional y claro, integra un formulario de contacto seguro y una sección blog para estrategias de marketing de contenidos, mejorando significativamente su presencia online y la captación de leads.</p> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección de Películas Favoritas */}
      <section className="py-5 m-5 rounded-3 sebastian-fondo">
        <div className="container">
          <h3 className="sebastian-section-title sebastian-text-primary">
            <i className="bi bi-film me-2"></i>Series y Películas Favoritas
          </h3>
          
            <div className="row g-4">
            {peliculasResolved.map(pelicula => (
              <div key={pelicula.id} className="col-12 col-md-6 col-xl-3">
                <MediaCard 
                  item={pelicula} 
                  type="movie"
                  className="sebastian-media-card"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Música Favorita */}
      <section className="py-5 m-5 rounded-3 sebastian-fondo">
        <div className="container">
          <h3 className="sebastian-section-title sebastian-text-primary">
            <i className="bi bi-music-note-beamed me-2"></i>Música Favorita
          </h3>
           <div className="row g-4">
            {musicaResolved.map(cancion => (
              <div key={cancion.id} className="col-12 col-md-6 col-xl-3">
                <MediaCard 
                  item={cancion} 
                  type="music"
                  className="sebastian-media-card"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Navegación entre integrantes */}
       <section className="mb-5 py-4 text-white sebastian-navegacion">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/integrantes/lucas" className="btn sebastian-bordes">
                        <i className="bi bi-arrow-left me-1"></i>Perfil anterior
                      </Link>
                      <div className="text-center">
                        <small>Otros integrantes:</small>
                        <div className="mt-2">
                          <Link to="/integrantes/lucas" className="btn btn-sm  me-2 small sebastian-bordes">Lucas</Link>
                          <Link to="/integrantes/sebastián" className="btn btn-sm  me-2 sebastian-bordes">Sebastian</Link>
                          <Link to="/integrantes/estiven" className="btn btn-sm  me-2 sebastian-bordes">Estiven</Link>
                          <Link to="/integrantes/jose" className="btn btn-sm  sebastian-bordes">Jose</Link>
                        </div>
                      </div>
                      <Link to="/integrantes/victoria" className="btn sebastian-bordes">
                        Siguiente perfil<i className="bi bi-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </div>
  );
};

export default Sebastian;