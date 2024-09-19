const axios = require("axios");
const BASE_URL = "http://localhost:3000";

//util function, messy and just for demo purposes
const insertOfficers = async () => {
  const officers = [
    { name: "Max Chavez", position: "Backend Engineer", grade: 99 },
  ];

  for (const officer of officers) {
    try {
      const response = await axios.post(`${BASE_URL}/officers`, officer);
      console.log("Inserted officer:", response.data);
    } catch (error) {
      console.log(
        "Error inserting officer:",
        error.response?.data || error.message
      );
    }
  }
};

const populateDatabase = async () => {
  await insertOfficers();
};

populateDatabase();
