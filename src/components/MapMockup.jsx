import React from 'react';
import { FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import './MapMockup.css';

const MapMockup = () => {
  return (
    <div className="map-mockup-container">
      {/* Map Background grid simulating streets */}
      <div className="map-grid"></div>

      {/* Floating Summary Card */}
      <div className="map-summary-card glass-panel">
        <div className="summary-item">
          <span className="summary-label">Idle</span>
          <div className="summary-bar-container">
            <div className="summary-bar bg-orange" style={{ width: '30%' }}></div>
          </div>
          <span className="summary-value">5</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Running</span>
          <div className="summary-bar-container">
            <div className="summary-bar bg-green" style={{ width: '80%' }}></div>
          </div>
          <span className="summary-value">15</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Stoppage</span>
          <div className="summary-bar-container">
            <div className="summary-bar bg-red" style={{ width: '15%' }}></div>
          </div>
          <span className="summary-value">2</span>
        </div>
      </div>

      {/* Marker 1: Idle */}
      <div className="map-marker-wrapper" style={{ top: '30%', left: '25%' }}>
        <div className="marker-pulse pulse-orange"></div>
        <FaMapMarkerAlt className="marker-icon text-orange" />
        <div className="marker-tooltip glass-panel">
          <FaInfoCircle className="tooltip-icon text-blue" />
          <span>Idle Stoppage</span>
        </div>
      </div>

      {/* Marker 2: Running */}
      <div className="map-marker-wrapper" style={{ top: '65%', left: '35%' }}>
        <div className="marker-pulse pulse-green"></div>
        <FaMapMarkerAlt className="marker-icon text-green" />
        <div className="marker-tooltip glass-panel tooltip-right">
          <FaInfoCircle className="tooltip-icon text-blue" />
          <span>Item Dropped</span>
        </div>
      </div>

      {/* Marker 3: Stoppage */}
      <div className="map-marker-wrapper" style={{ top: '55%', left: '70%' }}>
        <div className="marker-pulse pulse-red"></div>
        <FaMapMarkerAlt className="marker-icon text-red" />
        <div className="marker-tooltip glass-panel tooltip-right">
          <FaInfoCircle className="tooltip-icon text-blue" />
          <span>Unknown Stoppage</span>
        </div>
      </div>
    </div>
  );
};

export default MapMockup;
