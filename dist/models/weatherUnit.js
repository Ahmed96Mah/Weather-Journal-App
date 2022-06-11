import Client from '../database.js';
export class weatherUnit {
    async create(item) {
        try {
            const conn = await Client.connect();
            const sql = 'INSERT INTO weather (loc, temp, humid, wind, feel) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            const newWeather = await conn.query(sql, [
                item.location,
                item.temperature,
                item.humidity,
                item.wind,
                item.userFeel,
            ]);
            conn.release();
            return newWeather.rows[0];
        }
        catch (err) {
            throw new Error(`Error, ${err}`);
        }
    }
    async index() {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM weather';
            const allWeather = await conn.query(sql);
            conn.release();
            return allWeather.rows;
        }
        catch (err) {
            throw new Error(`Error, ${err}`);
        }
    }
    async show(id) {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM weather WHERE id=($1)';
            const weather = await conn.query(sql, [id]);
            conn.release();
            return weather.rows[0];
        }
        catch (err) {
            throw new Error(`Error, ${err}`);
        }
    }
    async edit(id, item) {
        try {
            const conn = await Client.connect();
            const sql = 'UPDATE weather SET (loc, temp, humid, wind, feel) = ($1, $2, $3, $4, $5) RETURNING *';
            const editedWeather = await conn.query(sql, [
                item.location,
                item.temperature,
                item.humidity,
                item.wind,
                item.userFeel,
            ]);
            conn.release();
            return editedWeather.rows[0];
        }
        catch (err) {
            throw new Error(`Error, ${err}`);
        }
    }
    async delete(id) {
        try {
            const conn = await Client.connect();
            const sql = 'DELETE FROM weather WHERE id=($1) RETURNING *';
            const deletedWeather = await conn.query(sql, [id]);
            conn.release();
            return deletedWeather.rows[0];
        }
        catch (err) {
            throw new Error(`Error, ${err}`);
        }
    }
}
