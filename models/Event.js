const db = require('../database/connect');

class Event {
    constructor({ event_name, about, place, event_id, user_id, category_id}) {
        this.id = event_id
        this.event_name = event_name
        this.about = about
        this.place = place
        this.category_id = category_id
        this.userId = user_id
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM events");
        return response.rows.map(d => new Event(d));
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM events WHERE event_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate entry.")
        }
        return new Event(response.rows[0]);
    }

    static async create(data) {
        const { event_name, about, place, category_id, user_id } = data;
        let response = await db.query("INSERT INTO events (event_name, about, place, category_id, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *;", [event_name, about, place, category_id, user_id]);
        const newId = response.rows[0].event_id;
        const newPost = await Event.getOneById(newId);
        return newPost;
    }

    static async find(data) {
      let query = '%' + data.query + '%'
      let response = await db.query("SELECT * FROM events WHERE about ILIKE $1 OR event_name ILIKE $1 OR place ILIKE $1", [query])
      if (response.rows.length === 0) {
        throw new Error("Unable to locate entry.")
      }
      if (response.rows.length != 0) {
        return (response.rows.map(e => new Event(e)))
      }
    }
}

module.exports = Event
