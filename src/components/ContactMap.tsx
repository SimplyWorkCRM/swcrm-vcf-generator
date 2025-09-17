import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ContactData } from '@/lib/vcfGenerator';

interface ContactMapProps {
  contact: ContactData;
}

const ContactMap = ({ contact }: ContactMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // For demo purposes, using a placeholder token
    // In production, you should use your own Mapbox token
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVtb3VzZXIiLCJhIjoiY2wwMDAwMDAwMDAwMDAwMDBjMDAwMDAwMDAifQ.demo_token';
    
    // Simulate coordinates for demo
    const homeCoords: [number, number] = contact.home_address.city ? 
      getSimulatedCoordinates(contact.home_address.city) : 
      [-74.006, 40.7128]; // Default to NYC
      
    const workCoords: [number, number] = contact.work_address.city ? 
      getSimulatedCoordinates(contact.work_address.city) : 
      [-73.9857, 40.7484]; // Default to Manhattan

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: homeCoords,
      zoom: 10,
      pitch: 30
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('load', () => {
      if (!map.current) return;

      // Add home marker if address exists
      if (contact.home_address.street || contact.home_address.city) {
        const homeMarker = new mapboxgl.Marker({
          color: '#3B82F6',
          scale: 0.8
        })
          .setLngLat(homeCoords)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div class="p-2">
                  <h3 class="font-semibold text-sm">Home Address</h3>
                  <p class="text-xs text-gray-600">
                    ${contact.home_address.street || ''}<br/>
                    ${contact.home_address.city || ''} ${contact.home_address.postal_code || ''}<br/>
                    ${contact.home_address.country_region || ''}
                  </p>
                </div>
              `)
          )
          .addTo(map.current);
      }

      // Add work marker if address exists
      if (contact.work_address.street || contact.work_address.city) {
        const workMarker = new mapboxgl.Marker({
          color: '#EF4444',
          scale: 0.8
        })
          .setLngLat(workCoords)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div class="p-2">
                  <h3 class="font-semibold text-sm">Work Address</h3>
                  <p class="text-xs text-gray-600">
                    ${contact.work_address.street || ''}<br/>
                    ${contact.work_address.city || ''} ${contact.work_address.postal_code || ''}<br/>
                    ${contact.work_address.country_region || ''}
                  </p>
                </div>
              `)
          )
          .addTo(map.current);
      }

      // Add some demo pinpoints for simulation
      addDemoLocations(map.current);
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [contact]);

  return (
    <div className="relative w-full h-64 rounded-xl overflow-hidden glass-card">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 glass-card p-2 rounded-lg">
        <p className="text-white text-sm font-medium">Contact Locations</p>
      </div>
      {/* Notice about Mapbox token */}
      <div className="absolute bottom-4 right-4 glass-card p-2 rounded-lg">
        <p className="text-white/80 text-xs">Demo map - Add your Mapbox token</p>
      </div>
    </div>
  );
};

// Simulate coordinates based on city name (for demo purposes)
function getSimulatedCoordinates(city: string): [number, number] {
  const cityCoords: { [key: string]: [number, number] } = {
    'new york': [-74.006, 40.7128],
    'london': [-0.1276, 51.5074],
    'paris': [2.3522, 48.8566],
    'tokyo': [139.6917, 35.6895],
    'sydney': [151.2093, -33.8688],
    'sarajevo': [18.4131, 43.8476],
    'san francisco': [-122.4194, 37.7749],
    'los angeles': [-118.2437, 34.0522],
    'chicago': [-87.6298, 41.8781],
    'miami': [-80.1918, 25.7617]
  };
  
  const normalizedCity = city.toLowerCase();
  return cityCoords[normalizedCity] || [-74.006, 40.7128];
}

// Add demo location pins for simulation
function addDemoLocations(map: mapboxgl.Map) {
  const demoLocations: Array<{ coords: [number, number], name: string, type: string }> = [
    { coords: [-74.0059, 40.7128], name: 'Central Park', type: 'park' },
    { coords: [-74.0134, 40.7051], name: 'Wall Street', type: 'business' },
    { coords: [-73.9857, 40.7484], name: 'Times Square', type: 'landmark' },
    { coords: [-73.9442, 40.8176], name: 'Yankee Stadium', type: 'sports' },
    { coords: [-73.9735, 40.7505], name: 'Empire State Building', type: 'landmark' }
  ];

  demoLocations.forEach(location => {
    const color = location.type === 'business' ? '#10B981' : 
                  location.type === 'landmark' ? '#F59E0B' :
                  location.type === 'park' ? '#059669' : '#8B5CF6';
    
    new mapboxgl.Marker({
      color: color,
      scale: 0.6
    })
      .setLngLat(location.coords)
      .setPopup(
        new mapboxgl.Popup({ offset: 15 })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-semibold text-sm">${location.name}</h3>
              <p class="text-xs text-gray-600 capitalize">${location.type}</p>
            </div>
          `)
      )
      .addTo(map);
  });
}

export default ContactMap;