import { weatherDashboard } from '../services/dashboard.js';
const dashboard = new weatherDashboard();
const getLastReading = async (_req, res) => {
  try {
    const lastRead = await dashboard.lastReading();
    res.status(200).json(lastRead);
  } catch (err) {
    res.status(400).json({ Message: `${err}` });
  }
};
export const dashboardRoutes = (app) => {
  app.get('/dashboard/latest', getLastReading);
};
