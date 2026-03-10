import express from "express";
import path from "path";
import dotenv from "dotenv";
import pagesRouter from "./routes/pages";

dotenv.config();

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/", pagesRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
