const express = require("express")

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/", (req, res) => {
    res.json("success",)
})

app.listen(4000, () => {
    console.log("listening on: localhost: " + PORT);
})