import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MBTA_API_URL = 'https://api-v3.mbta.com/vehicles';

const TrainTracker = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get(MBTA_API_URL);
        setTrains(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrains();
  }, []);

  return (
    <div>
      <h2>Train Tracker</h2>
      {trains.map(train => (
        <div key={train.id}>
          <p>Train ID: {train.id}</p>
          <p>Route: {train.attributes.route_id}</p>
          <p>Latitude: {train.attributes.latitude}</p>
          <p>Longitude: {train.attributes.longitude}</p>
        </div>
      ))}
    </div>
  );
};

export default TrainTracker;