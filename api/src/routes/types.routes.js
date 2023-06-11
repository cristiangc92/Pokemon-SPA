const { Router } = require("express");
const { Type } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allTypes = await Type.findAll();
    const typesMap = allTypes?.map((g) => g.name);
    res.status(200).send(typesMap);
  } catch (error) {
    console.log("Error en la ruta /types: ", error);
  }
});

module.exports = router;
