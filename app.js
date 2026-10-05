import express from "express";
import { getEmployee, getEmployees, getRandomEmployee } from "#db/employees";
import router from "#api/employees";

const app = express();
export default app;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", router);

app.use((err, req, res, next) => {
  res.status(500).send("Sorry! Something went wrong :(");
});
