const express = require("express");
const cors = require("cors")
const cardRouter = require("./routes/card.routes");
const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use('/api', cardRouter) //route по которому я стучусь
app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
})

