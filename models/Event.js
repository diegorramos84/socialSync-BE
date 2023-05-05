const db = require('../database/connect');

class Event {
    constructor({ post_id, title, content, category,
        post_time, post_date, mood, user_id }) {
        this.id = post_id
        this.title = title
        this.content = content
        this.category = category
        this.post_time = post_time
        this.post_date = post_date
        this.mood = mood
        this.userId = user_id
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM events");
        return response.rows.map(d => new Event(d));
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM events WHERE post_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate entry.")
        }
        return new Event(response.rows[0]);
    }

    static async create(data) {
        const { title, content, category, mood } = data;
        let response = await db.query("INSERT INTO events (location) VALUES ($1, $2, $3, $4) RETURNING *;",
            [location]);
        const newId = response.rows[0].postId;
        const newPost = await Event.getOneById(newId);
        return newPost;
    }

    async destroy() {
        // console.log(data);
        let response = await db.query("DELETE FROM events WHERE post_id = $1 RETURNING *;", [this.id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to delete entry.")
        }
        return new Event(response.rows[0]);
    }
}

module.exports = Event

