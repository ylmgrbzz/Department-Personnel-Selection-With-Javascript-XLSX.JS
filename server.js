const express = require("express");
const xlsx = require("xlsx");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/personeller", (req, res) => {
  const filePath = "C:\\react\\proje\\personel_tablosu-vt.ods";

  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const personeller = xlsx.utils.sheet_to_json(worksheet);

  res.json(personeller);
});

app.listen(port, () => {
  console.log(`Server çalışıyor: http://localhost:${port}`);
});
