import express, { Request, Response } from 'express';
import { Weather, weatherUnit } from '../models/weatherUnit.js';

const dash = new weatherUnit();

const create = async (req: Request, res: Response): Promise<void> => {
  const newWeather: Weather = {
    location: req.body.loc,
    temperature: parseInt(req.body.temp),
    humidity: parseInt(req.body.humid),
    wind: parseInt(req.body.wind),
    userFeel: req.body.feel,
  };
  try {
    const createdWeather = await dash.create(newWeather);
    res.status(200).json(createdWeather);
  } catch (err) {
    res.status(400).json({ Message: `${err}` });
  }
};

const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const allWeather = await dash.index();
    res.status(200).json(allWeather);
  } catch (err) {
    res.status(400).json({ Message: `${err}` });
  }
};

const show = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  try {
    const weather = await dash.show(id);
    res.status(200).json(weather);
  } catch (err) {
    res.status(400).json({ Message: `${err}` });
  }
};

const edit = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  const newWeather: Weather = {
    location: req.body.loc,
    temperature: parseInt(req.body.temp),
    humidity: parseInt(req.body.humid),
    wind: parseInt(req.body.wind),
    userFeel: req.body.feel,
  };
  try {
    const editedWeather = await dash.edit(id, newWeather);
    res.status(200).json(editedWeather);
  } catch (err) {
    res.status(400).json({ Message: `${err}` });
  }
};

const deleteWeather = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  try {
    const deletedWeather = await dash.delete(id);
    res.status(200).json(deletedWeather);
  } catch (err) {
    res.status(400).json({ Message: `${err}` });
  }
};

export const weatherRoutes = (app: express.Application): void => {
  app.get('/weather', index);
  app.get('/weather/:id', show);
  app.post('/weather/add', create);
  app.put('/weather/edit/:id', edit);
  app.delete('/weather/delete/:id', deleteWeather);
};
