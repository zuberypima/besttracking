import React from 'react';
import './Card.css';

const Card = ({ children, title, icon, className = '', hoverEffect = true }) => {
  return (
    <div className={`card glass-panel ${hoverEffect ? 'card-hover' : ''} ${className}`}>
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;
