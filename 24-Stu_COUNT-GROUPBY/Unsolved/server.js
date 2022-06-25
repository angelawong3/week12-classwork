const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "books_db",
  },
  console.log(`Connected to the books_db database.`)
);

// query database using COUNT() and GROUP BY "in_stock"
db.query(
  "SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock",
  function (err, results) {
    console.log(results);
  }
);

// query database using SUM(), MAX(), MIN(), and AVG() and GROUP BY "section"
db.query(
  "SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section",
  function (err, results) {
    console.log(results);
  }
);

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
