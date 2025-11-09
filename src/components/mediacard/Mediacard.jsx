import React from 'react';

const isTouchDevice = () => {
  return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
};

const MediaCard = ({ 
  item, 
  type = 'movie', // 'movie' o 'music'
  className = '' 
}) => {
  const {
    id,
    titulo,
    imagen,
    director,
    artista,
    año,
    genero,
    descripcion,
    rating,
    duracion,
    trailer,
    enlace
  } = item;

  const showOverlay = isTouchDevice();

  return (
    <div className={`card h-100 shadow-sm position-relative overflow-hidden ${className}`} 
         style={{ 
           minHeight: '300px',
           background: type === 'movie' 
             ? 'linear-gradient(145deg, #16213e, #1a1a2e)' 
             : 'linear-gradient(145deg, #1a2e3e, #2d1a3e)'
         }}>
      
      {/* Imagen */}
      <img 
        src={imagen} 
        alt={titulo} 
        className="card-img-top object-fit-cover"
        style={{ height: 'auto', maxHeight: '250px', objectFit: 'cover' }}
      />
      
      {/* Overlay con información completa */}
      <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-white text-center"
           style={{ 
             background: 'rgba(10, 10, 20, 0.9)',
             opacity: showOverlay ? 1 : 0,
             transition: 'opacity 0.5s ease'
           }}
           onMouseEnter={(e) => { if (!showOverlay) e.currentTarget.style.opacity = 1; }}
           onMouseLeave={(e) => { if (!showOverlay) e.currentTarget.style.opacity = 0; }}>
        
        <h5 className="card-title fw-bold text-danger mb-2">{titulo}</h5>
        
        {type === 'movie' ? (
          <p className="card-text fst-italic text-light-emphasis mb-2">
            {director} • {año} • {genero}
          </p>
        ) : (
          <p className="card-text fst-italic text-light-emphasis mb-2">
            {artista} • {año} • {genero}
          </p>
        )}
        
        <p className="card-text small mb-3">{descripcion}</p>
        
        {type === 'movie' ? (
          <p className="card-text fw-bold text-success mb-3">{rating}</p>
        ) : (
          <p className="card-text fw-bold text-success mb-3">Duración: {duracion}</p>
        )}
        
        <a 
          href={type === 'movie' ? trailer : enlace} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-danger btn-sm"
        >
          <i className={`fas ${type === 'movie' ? 'fa-play-circle' : 'fa-play'} me-2`}></i>
          {type === 'movie' ? 'Ver trailer' : 'Escuchar'}
        </a>
      </div>
      
    </div>
  );
};

export default MediaCard;