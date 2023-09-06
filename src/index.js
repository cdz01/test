const express = require("express")

const app = express();

app.use(express.json());

app.use("/", (req, res) => {
    res.json("success",)
})

app.listen(4000, () => {
    console.log("listening on: localhost:4000");
})