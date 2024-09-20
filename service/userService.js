const pool = require("../config/db");

const userService = {
  // 注册
  register: async ({ email, nickName, password }) => {
    const sql =
      "INSERT INTO users (email, nickName, password) VALUES (?, ?, ?)";
    const [result] = await pool.query(sql, [email, nickName, password]);
    return result;
  },

  // 登录
  login: async ({ email, password }) => {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    const [rows] = await pool.query(sql, [email, password]);
    return rows[0];
  },

  // 获取用户列表
  getUserList: async () => {
    const sql = "SELECT * FROM users";
    const [rows, fields] = await pool.query(sql);
    return rows;
  },

  // 根据 id 获取用户信息
  findById: async (id) => {
    const sql = "SELECT * FROM users WHERE id = ?";
    const [rows] = await pool.query(sql, [id]);
    return rows[0];
  },

  // 根据 email 获取用户信息
  getUserByEmail: async (email) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    const [rows] = await pool.query(sql, [email]);
    return rows[0];
  },

  // 更新用户信息
  updateUser: async ({ id, email, nickName, password }) => {
    const sql =
      "UPDATE users SET email = ?, nickName = ?, password = ? WHERE id = ?";
    const [result] = await pool.query(sql, [email, nickName, password, id]);
    return result;
  },

  // 删除用户
  deleteUser: async (id) => {
    const sql = "DELETE FROM users WHERE id = ?";
    const [result] = await pool.query(sql, [id]);
    return result;
  },
};

module.exports = userService;
