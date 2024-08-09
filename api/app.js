const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const expenseTable = require("./model/expense"); //which one model or db connection!!
const routes = require("./routes/route");

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false })); //check!!

app.use("/expenses", routes);

expenseTable
  .sync()
  .then(
    app.listen(3000, () => {
      console.log("connected :|");
    })
  )
  .catch((err) => {
    console.log(err);
  });
