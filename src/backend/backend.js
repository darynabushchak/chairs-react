const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = 3001;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "lab-8",
  password: "1111",
  port: 5432,
});

app.use(cors());

app.get("/plates", (req, res) => {
  pool.query("SELECT * FROM chair_info", (error, results) => {
    if (error) {
      res.status(500).json({ error: "An error occurred while fetching data." });
      return;
    }

    res.status(200).json(results.rows);
  });
});

app.get("/items/:id", async (req, res) => {
  const itemId = req.params.id;

  try {
    const query = "SELECT * FROM chair_info WHERE id = $1";
    const result = await pool.query(query, [itemId]);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
