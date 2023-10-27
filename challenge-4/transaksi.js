import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router();

const prisma = new PrismaClient();

router.get("/transaksi/:akunID", async (req, res) => {
  try {
    const result = await prisma.transaksi.findMany({
      where: {
        akunID: Number(req.params.akunID),
      },
    });
    res.json(result);
  } catch (error) {
    console.error("Error executing SQL query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/transaksi", async (req, res) => {
  try {
    const result = await prisma.transaksi.create({
      data: {
        akunID: req.body.akunID,
        jenis: req.body.jenis,
        jumlah: req.body.jumlah,
      },
    });
    res.json(result);
  } catch (error) {
    console.error("Error executing SQL query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
