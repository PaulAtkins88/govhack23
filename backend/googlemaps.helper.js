import { Client } from '@googlemaps/google-maps-services-js';
process.env.GOOGLE_MAPS_API_KEY = 'AIzaSyDgzgT_3aZJ_a1lWK_juF-Zn5x-Wy8nTB8';
const googlemaps = new Client({});

/**
 * @description Get places nearby from Google Maps API
 * @param {object} start - latitude and logitude
 * @param {object} destination - latitude and logitude
 * @param {array} types - types of destinations to include
 * @returns {object} Places nearby - name, latitude, longitude, place_id, open_now, opening hours, rating, user_ratings_total, photo, type
 */
export async function getJourney({ start, destination, types }) {
  try {
    // get distance between start and destination
    const distanceResponse = await googlemaps.distancematrix({
      params: {
        origins: [`${start.latitude},${start.longitude}`],
        destinations: [`${destination.latitude},${destination.longitude}`],
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });

    const distance = distanceResponse.data.rows[0].elements[0].distance.value;

    // get midpoint between start and destination
    const location = {
      latitude: (start.latitude + destination.latitude) / 2,
      longitude: (start.longitude + destination.longitude) / 2,
    };

    const nearbyPlacesPromises = types.map((type) =>
      googlemaps.placesNearby({
        params: {
          location: `${location.latitude},${location.longitude}`,
          radius: distance,
          type,
          key: process.env.GOOGLE_MAPS_API_KEY,
          rankby: 'prominence',
          keyword,
        },
      })
    );

    const nearbyPlacesResults = await Promise.all(nearbyPlacesPromises);

    const nearbyPlaces = nearbyPlacesResults
      .map((placeType) => placeType.data.results)
      .flat();

    return nearbyPlaces.map((place) => ({
      name: place.name,
      latitude: place.geometry.location.lat,
      longitude: place.geometry.location.lng,
      place_id: place.place_id,
      opening_hours: place.opening_hours,
      rating: place.rating,
      user_ratings_total: place.user_ratings_total,
      photo: place.photos,
      types: place.types,
    }));
  } catch (error) {
    console.log(error);
    throw error;
  }
}
