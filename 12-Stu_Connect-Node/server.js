const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// establishinga connectopn to the database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "classlist_db",
  },
  console.log(`Connected to the classlist_db database.`)
);

// querying thte database for the "students" table
db.query("SELECT * FROM students", function (err, results) {
  console.log(results);
});

// catch all invalid routes and returning a 404 status
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
