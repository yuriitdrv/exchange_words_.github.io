const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Сервер Express запущен!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
