const express = require('express')
const cardRouter = require("./routes/card.routes")

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use('/api', cardRouter)


app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
})

