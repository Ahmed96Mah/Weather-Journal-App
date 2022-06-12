import Client from '../database.js';
import { Weather } from '../models/weatherUnit.js';

export class weatherDashboard {
  async lastReading(): Promise<Weather> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM weather ORDER BY id DESC LIMIT 1';
      const lastRead = await conn.query(sql);
      conn.release();
      return lastRead.rows[0];
    } catch (err) {
      throw new Error(`Error, ${err}`);
    }
  }
}
