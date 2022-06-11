import express, { Request, Response } from 'express';
import { weatherDashboard } from '../services/dashboard.js';

const dashboard = new weatherDashboard();

const getLastReading = async (_req: Request, res: Response): Promise<void> => {
  try {
    const lastRead = await dashboard.lastReading();
    res.status(200).json(lastRead);
  } catch (err) {
    res.status(400).json({ Message: `${err}` });
  }
};

export const dashboardRoutes = (app: express.Application): void => {
  app.get('/dashboard/latest', getLastReading);
};
