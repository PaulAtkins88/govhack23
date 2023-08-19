// Function to calculate the haversine distance between two points in meters
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000; // Earth's radius in meters
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Function to calculate the intermediate point
function intermediatePoint(lat1, lon1, lat2, lon2, fraction) {
  const d = haversineDistance(lat1, lon1, lat2, lon2);
  const A =
    Math.sin(((1 - fraction) * d) / (2 * 6371000)) /
    Math.sin(d / (2 * 6371000));
  const B =
    Math.sin((fraction * d) / (2 * 6371000)) / Math.sin(d / (2 * 6371000));
  const x =
    A * Math.cos((lat1 * Math.PI) / 180) * Math.cos((lon1 * Math.PI) / 180) +
    B * Math.cos((lat2 * Math.PI) / 180) * Math.cos((lon2 * Math.PI) / 180);
  const y =
    A * Math.cos((lat1 * Math.PI) / 180) * Math.sin((lon1 * Math.PI) / 180) +
    B * Math.cos((lat2 * Math.PI) / 180) * Math.sin((lon2 * Math.PI) / 180);
  const z =
    A * Math.sin((lat1 * Math.PI) / 180) + B * Math.sin((lat2 * Math.PI) / 180);
  const lat = (Math.atan2(z, Math.sqrt(x * x + y * y)) * 180) / Math.PI;
  const lon = (Math.atan2(y, x) * 180) / Math.PI;
  return {
    latitude: lat,
    longitude: lon,
  };
}
