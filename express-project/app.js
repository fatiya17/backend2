// Import Express JS
const express = require("express");
const router = require("./routes/api.js");

// Create an Express JS instance
const app = express();

// Menggunakan routing (router)
app.use(express.json());
app.use(router);
/**
 * Define a route
 * Method GET accepts two parameters:
 * 1. The route
 * 2. A callback function that accepts two parameters:
 *  - Request = req
 *  - Response = res
 */

app.get("/", (req, res) => {
  res.send("Hello Express JS");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

app.get("/students", (req, res) => {
    res.send("Menampilkan semua students");
  });
  
  app.post("/students", (req, res) => {
    res.send("Menambahkan data student");
  });
  
  app.put("/students/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Mengedit student ${id}`);
  });
  
  app.delete("/students/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Mengedit student ${id}`);
  });

  