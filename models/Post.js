const db = require("../config/db");

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  /*
  tässä post
  */
  async save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth();
    let dd = d.getDate();
    let createdDate = `${yyyy}-${mm}-${dd}`;

    let sql = `INSERT INTO posts(title, body, created_at) VALUES('${this.title}', '${this.body}', '${createdDate}')`;

    const [newPost, _] = await db.execute(sql);
    return newPost;
  }

  /*
  tässä put
   */
  static put(id) {
    let sql = `UPDATE posts SET title = ${this.title}, body = ${this.body} WHERE  id = ${id};`;

    return db.execute(sql);
  }

  /*
  tässä delete
   */
  static delete(id) {
    let sql = `DELETE FROM posts WHERE  id = ${id};`;

    return db.execute(sql);
  }

  /*
  tässä get
  */
  static findAll() {
    let sql = "SELECT * FROM posts;";
    return db.execute(sql);
  }

  /*
  tässä get
  */
  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id = ${id};`;
    return db.execute(sql);
  }
}

module.exports = Post;
