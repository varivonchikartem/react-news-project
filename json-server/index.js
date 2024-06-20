const fs = require("fs");
const jsonServer = require("json-server");
const path = require("path");

const PORT = 8000;

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

server.post("/registration", (req, res) => {
  try {
    const { username, password } = req.body;
    const dbPath = path.resolve(__dirname, "db.json");
    const db = JSON.parse(fs.readFileSync(dbPath, "UTF-8"));
    const { users = [] } = db;

    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);

    fs.writeFileSync(dbPath, JSON.stringify({ ...db, users }, null, 2));

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8"));
    const { users = [] } = db;

    const userFromBd = users.find((user) => user.username === username && user.password === password);

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: "User not found" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "AUTH ERROR" });
  }

  next();
});

server.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
