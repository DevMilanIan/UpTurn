const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use("/static", express.static(path.resolve(__dirname, "static")));
app.use('/images', express.static(path.resolve(__dirname, "images")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"))
});

app.listen(port, () => console.log("Server running on port: " + port));