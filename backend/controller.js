import { getJourney } from './googlemaps.helper.js';

export const getJourneyController = async (req, res, next) => {
  try {
    const journey = await getJourney(req.body);
    res.status(200).json(journey);
    return next();
  } catch (error) {
    res.status(400).json(error);
  }
};
