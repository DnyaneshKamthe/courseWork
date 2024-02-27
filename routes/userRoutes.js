const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")


router.get("/getAllCities", userController.getAllCities)
router.get("/getCountriesSortedByPopulation", userController.getCountriesSortedByPopulation);
router.get("/getCountriesByContinentSortedByPopulation/:continent", userController.getCountriesByContinentSortedByPopulation);
router.get("/getCountriesByRegionSortedByPopulation/:region", userController.getCountriesByRegionSortedByPopulation);

module.exports= router;