const City = require("../models/city");
const Country = require("../models/country");

const getAllCities = async (req, res) => {
    console.log("getAllCities called");
    try {
        const cities = await City.findAll();
        return res.status(200).json({ status: 200, data: cities });
    } catch (error) {
        console.error("Error fetching cities:", error);
        return res.status(500).json({ status: 500, message: "Failed to fetch cities" });
    }
};


const getCountriesSortedByPopulation = async (req, res) => {
    console.log("getCountriesSortedByPopulation called");
    try {
        const countries = await Country.findAll({
            order: [['Population', 'DESC']] // Sort by Population in descending order
        });
        return res.status(200).json({ status: 200, data: countries });
    } catch (error) {
        console.error("Error fetching countries:", error);
        return res.status(500).json({ status: 500, message: "Failed to fetch countries" });
    }
};


const getCountriesByContinentSortedByPopulation = async (req, res) => {
    const { continent } = req.params; // Assuming continent is passed as a parameter
    
    try {
        const countries = await Country.findAll({
            where: { Continent: continent }, // Filter by continent
            order: [['Population', 'DESC']] // Sort by Population in descending order
        });
        return res.status(200).json({ status: 200, data: countries });
    } catch (error) {
        console.error("Error fetching countries by continent:", error);
        return res.status(500).json({ status: 500, message: "Failed to fetch countries by continent" });
    }
};

const getCountriesByRegionSortedByPopulation = async (req, res) => {
    const { region } = req.params; // Assuming region is passed as a parameter
    
    try {
        const countries = await Country.findAll({
            where: { Region: region }, // Filter by region
            order: [['Population', 'DESC']] // Sort by Population in descending order
        });
        return res.status(200).json({ status: 200, data: countries });
    } catch (error) {
        console.error("Error fetching countries by region:", error);
        return res.status(500).json({ status: 500, message: "Failed to fetch countries by region" });
    }
};

const getTopPopulatedCountries = async (req, res) => {
    const { limit } = req.params; // Assuming limit is passed as a parameter
    
    try {
        const countries = await Country.findAll({
            order: [['Population', 'DESC']], // Sort by Population in descending order
            limit: parseInt(limit) // Limit the number of results to the user-provided value
        });
        return res.status(200).json({ status: 200, data: countries });
    } catch (error) {
        console.error("Error fetching top populated countries:", error);
        return res.status(500).json({ status: 500, message: "Failed to fetch top populated countries" });
    }
};

const getTopPopulatedCountriesInContinent = async (req, res) => {
    const { continent, limit } = req.params; // Assuming continent and limit are passed as parameters
    
    try {
        const countries = await Country.findAll({
            where: { Continent: continent }, // Filter by continent
            order: [['Population', 'DESC']], // Sort by Population in descending order
            limit: parseInt(limit) // Limit the number of results to the user-provided value
        });
        return res.status(200).json({ status: 200, data: countries });
    } catch (error) {
        console.error("Error fetching top populated countries in continent:", error);
        return res.status(500).json({ status: 500, message: "Failed to fetch top populated countries in continent" });
    }
};

const getTopPopulatedCountriesInRegion = async (req, res) => {
    const { region, limit } = req.params; // Assuming region and limit are passed as parameters
    
    try {
        const countries = await Country.findAll({
            where: { Region: region }, // Filter by region
            order: [['Population', 'DESC']], // Sort by Population in descending order
            limit: parseInt(limit) // Limit the number of results to the user-provided value
        });
        return res.status(200).json({ status: 200, data: countries });
    } catch (error) {
        console.error("Error fetching top populated countries in region:", error);
        return res.status(500).json({ status: 500, message: "Failed to fetch top populated countries in region" });
    }
};

const getCitiesInWorldSortedByPopulation = async (req, res) => {
    try {
        const cities = await City.findAll({
            order: [['Population', 'DESC']] // Sort by Population in descending order
        });
        return res.status(200).json({ status: 200, data: cities });
    } catch (error) {
        console.error("Error fetching cities in the world:", error);
        return res.status(500).json({ status: 500, message: "Failed to fetch cities in the world" });
    }
};

const getCitiesInContinentSortedByPopulation = async (req, res) => {
    const { continent } = req.params; // Assuming continent is passed as a parameter
    
    try {
        const cities = await City.findAll({
            where: { Continent: continent }, // Filter by continent
            order: [['Population', 'DESC']] // Sort by Population in descending order
        });
        return res.status(200).json({ status: 200, data: cities });
    } catch (error) {
        console.error("Error fetching cities in continent:", error);
        return res.status(500).json({ status: 500, message: "Failed to fetch cities in continent" });
    }
};

const getCitiesInRegionSortedByPopulation = async (req, res) => {
    const { region } = req.params; // Assuming region is passed as a parameter
    
    try {
        const cities = await City.findAll({
            where: { Region: region }, // Filter by region
            order: [['Population', 'DESC']] // Sort by Population in descending order
        });
        return res.status(200).json({ status: 200, data: cities });
    } catch (error) {
        console.error("Error fetching cities in region:", error);
        return res.status(500).json({ status: 500, message: "Failed to fetch cities in region" });
    }
};


const getCitiesInCountrySortedByPopulation = async (req, res) => {
    const { countryCode } = req.params; // Assuming countryCode is passed as a parameter
    
    try {
        const cities = await City.findAll({
            where: { CountryCode: countryCode }, // Filter by country code
            order: [['Population', 'DESC']] // Sort by Population in descending order
        });
        return res.status(200).json({ status: 200, data: cities });
    } catch (error) {
        console.error("Error fetching cities in country:", error);
        return res.status(500).json({ status: 500, message: "Failed to fetch cities in country" });
    }
};

const getCitiesInDistrictSortedByPopulation = async (req, res) => {
    const { district } = req.params; // Assuming district is passed as a parameter
    
    try {
        const cities = await City.findAll({
            where: { District: district }, // Filter by district
            order: [['Population', 'DESC']] // Sort by Population in descending order
        });
        return res.status(200).json({ status: 200, data: cities });
    } catch (error) {
        console.error("Error fetching cities in district:", error);
        return res.status(500).json({ status: 500, message: "Failed to fetch cities in district" });
    }
};


const getTopPopulatedCitiesInWorld = async (req, res) => {
    const { limit } = req.params; // Assuming limit is passed as a parameter
    
    try {
        const cities = await City.findAll({
            order: [['Population', 'DESC']], // Sort by Population in descending order
            limit: parseInt(limit) // Limit the number of results to the user-provided value
        });
        return res.status(200).json({ status: 200, data: cities });
    } catch (error) {
        console.error("Error fetching top populated cities in the world:", error);
        return res.status(500).json({ status: 500, message: "Failed to fetch top populated cities in the world" });
    }
};


module.exports = {
  getAllCities,
  getCountriesSortedByPopulation,
  getCountriesByContinentSortedByPopulation,
  getCountriesByRegionSortedByPopulation,
  getTopPopulatedCountries,
  getTopPopulatedCountriesInContinent,
  getTopPopulatedCountriesInRegion,
  getCitiesInWorldSortedByPopulation,
  getCitiesInContinentSortedByPopulation,
  getCitiesInRegionSortedByPopulation,
  getCitiesInCountrySortedByPopulation,
  getCitiesInDistrictSortedByPopulation,
  getTopPopulatedCitiesInWorld
};
