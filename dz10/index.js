const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const JWT_SECRET = "super_secret_key";
const JWT_EXPIRES_IN = "15m";

// =====================
// Фейковая база данных
// =====================
let users = [
  {
    id: 1,
    username: "admin",
    email: "admin@mail.com",
    password: bcrypt.hashSync("admin123", 10),
    role: "admin"
  },
  {
    id: 2,
    username: "user",
    email: "user@mail.com",
    password: bcrypt.hashSync("user123", 10),
    role: "user"
  }
];

// =====================
// Middleware JWT
// =====================
function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Токен отсутствует" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Неверный или просроченный токен" });
    }
    req.user = user;
    next();
  });
}

// =====================
// Проверка роли
// =====================
function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: "Доступ запрещён" });
    }
    next();
  };
}

// =====================
// ЛОГИН
// =====================
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: "Неверный пароль" });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  res.json({ token });
});

// =====================
// ЗАДАНИЕ 1 — обновление email
// =====================
app.put("/update-email", authenticateJWT, (req, res) => {
  const { email } = req.body;

  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  user.email = email;

  res.json({
    message: "Email успешно обновлён",
    user: {
      id: user.id,
      username: user.username,
      email: user.email
    }
  });
});

// =====================
// ЗАДАНИЕ 2 — удаление аккаунта
// =====================
app.delete("/delete-account", authenticateJWT, (req, res) => {
  const userExists = users.some(u => u.id === req.user.id);
  if (!userExists) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  users = users.filter(u => u.id !== req.user.id);

  res.json({ message: "Аккаунт успешно удалён" });
});

// =====================
// ЗАДАНИЕ 3 — обновление роли (admin only)
// =====================
app.put(
  "/update-role",
  authenticateJWT,
  authorizeRole("admin"),
  (req, res) => {
    const { userId, role } = req.body;

    const user = users.find(u => u.id === userId);
    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    user.role = role;

    res.json({
      message: "Роль успешно обновлена",
      user: { id: user.id, username: user.username, role: user.role }
    });
  }
);

// =====================
// ЗАДАНИЕ 4 — обновление JWT
// =====================
app.post("/refresh-token", authenticateJWT, (req, res) => {
  const newToken = jwt.sign(
    { id: req.user.id, role: req.user.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  res.json({ token: newToken });
});

// =====================
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
