const axios = require("axios");
// const config = {
//   headers: {
//     "User-Agent": "Axios - console app",
//   },
// };
module.exports = function () {
  // Make a request for a user with a given ID
  axios
    .get("https://cdn-api.co-vin.in/api/v2/admin/location/states")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
