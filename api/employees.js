import express from "express";
import {
  getEmployee,
  getEmployees,
  getRandomEmployee,
  addEmployee,
} from "#db/employees";
const router = express.Router();

router.get("/", (req, res) => {
  res.send(getEmployees());
});

router.get("/random", (req, res) => {
  const randomEmployee = getRandomEmployee();

  if (!randomEmployee) {
    return res.status(404).send("No employees available.");
  }

  res.send(randomEmployee);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const result = getEmployee(Number(id));
  if (!result) {
    return res.status(404).send("No employee with that id found!");
  }
  res.send(result);
});

router.post("/", (req, res) => {
  const { name } = req.body || {};

  if (!name) {
    return res.status(400).send("Request must have a name.");
  }

  const newEmployee = addEmployee(name);
  res.status(201).send(newEmployee);
});

export default router;
