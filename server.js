const express = require("express");

const app = express();

app.use(express.json());

// Route GET products
app.get("/api/products", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Ordinateur",
            price: 500000
        },
        {
            id: 2,
            name: "Imprimante",
            price: 150000
        },
        {
            id: 3,
            name: "Réfrigérateur",
            price: 350000
        }
    ]);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});