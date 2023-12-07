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

app.get("/chairs", (req, res) => {
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

app.get("/chairs/filter", async (req, res) => {
  const { parametr } = req.query;

  try {
    let query;
    let queryParams;

    if (parametr === "expensive") {
      query = "SELECT * FROM chair_info WHERE price > $1";
      queryParams = [500];
    } else if (parametr === "medium") {
      query = "SELECT * FROM chair_info WHERE price > $1 AND price < $2";
      queryParams = [70, 500];
    } else if (parametr === "cheap") {
      query = "SELECT * FROM chair_info WHERE price < $1";
      queryParams = [70];
    } else {
      return res
        .status(400)
        .json({ error: "Invalid or missing 'parametr' value." });
    }

    const result = await pool.query(query, queryParams);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error executing query:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching filtered data." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
