import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router();

const prisma = new PrismaClient();

router.get("/nasabah", async (req, res) => {
  try {
    const result = await prisma.nasabah.findMany();
    res.json(result);
  } catch (error) {
    console.error("Error executing SQL query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/nasabah/:id", async (req, res) => {
  try {
    const result = await prisma.nasabah.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.json(result);
  } catch (error) {
    console.error("Error executing SQL query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/nasabah", async (req, res) => {
  try {
    const result = await prisma.nasabah.create({
      data: {
        nama: req.body.nama,
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.json(result);
  } catch (error) {
    console.error("Error executing SQL query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/nasabah/:id", async (req, res) => {
  try {
    const result = await prisma.nasabah.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        nama: req.body.nama,
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.json(result);
  } catch (error) {
    console.error("Error executing SQL query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/nasabah/:id", async (req, res) => {
  try {
    const result = await prisma.nasabah.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.json(result);
  } catch (error) {
    console.error("Error executing SQL query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
