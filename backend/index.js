import { getJourneyController } from './controller.js';
import app from './server.js';

// start app on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

app.post('/journey', getJourneyController);
