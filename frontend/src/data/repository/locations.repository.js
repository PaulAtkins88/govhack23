import { locations } from './locationsData';

export const getAll = () => locations;

export const get = (name) => locations.find((l) => l.name === name);

export const getNearby = (location, radius) => {
  // returns locations within a radius of the given location
  const nearby = [];
  const { lat, lng } = location;
  locations.forEach((l) => {
    if (
      Math.abs(l.coordinates.lat - lat) <= radius &&
      Math.abs(l.coordinates.lng - lng) <= radius
    ) {
      nearby.push(l);
    }
  });
  return nearby;
};
