const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./routes/botconfigs")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});