import express from "express";
import cors from "cors";

import categoryRoute from "./route/categoryRoute.js";
import eventRoute from "./route/eventRoute.js";
import PembicaraRoute from "./route/pembicaraRoute.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Route utama
app.get("/", (req, res) => {
  res.send("Server Backend Invofest Running!");
});

// Category
app.use("/categories", categoryRoute);

// Event
app.use("/events", eventRoute);

// Pembicara
app.use("/pembicara", PembicaraRoute);

app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
});

;