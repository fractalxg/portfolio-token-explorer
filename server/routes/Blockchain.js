const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/blockchain", async (req, res) => {
  try {
    const response = await axios.get(
      "https://bscscan.com/searchHandler?term=trx&filterby=0"
    );
    const responseData = response.data;

    res.send(
      responseData.map((data) => {
        return { 
					title: data.title, 
					address: data.address,
				};
      })
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;