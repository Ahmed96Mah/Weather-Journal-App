import Client from '../database.js';
export class weatherDashboard {
  async lastReading() {
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
