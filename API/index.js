const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
})

app.get('/api', (req, res) => {
    res.json({
        food: [{
            "id" : "1",
            "name": "apple",
            "price": "200$",
            "category": "fruit",
            "url": "https://st2.depositphotos.com/7036298/10774/i/950/depositphotos_107748126-stock-photo-fresh-red-apple-with-leaf.jpg"
        },
        {
            "id" : "2",
            "name": "avocado",
            "price": "50$",
            "category": "fruit",
            "url": ""
        },
        {
            "id" : "3",
            "name": "apricot",
            "price": "10$",
            "category": "fruit",
            "url": ""
        },
        {
            "id" : "4",
            "name": "banana",
            "price": "300$",
            "category": "fruit",
            "url": ""
        },
        {
            "id" : "5",
            "name": "date",
            "price": "1100$",
            "category": "fruit",
            "url": ""
        },
        {
            "id" : "6",
            "name": "fig",
            "price": "2100$",
            "category": "fruit",
            "url": ""
        },
        {
            "id" : "7",
            "name": "grapefruit",
            "price": "20$",
            "category": "fruit",
            "url": ""
        },
        {
            "id" : "8",
            "name": "kiwi",
            "price": "10$",
            "category": "fruit",
            "url": ""
        },
        {
            "id" : "9",
            "name": "lime",
            "price": "700$",
            "category": "fruit",
            "url": ""
        },
        {
            "id" : "10",
            "name": "lemon",
            "price": "90$",
            "category": "fruit",
            "url": ""
        },
        {
            "id" : "11",
            "name": "mango",
            "price": "110$",
            "category": "fruit",
            "url": ""
        },
        {
            "id" : "12",
            "name": "melon",
            "price": "620$",
            "category": "fruit",
            "url": ""
        },
        {
            "id" : "13",
            "name": "bluebery",
            "price": "870$",
            "category": "berry",
            "url": ""
        },
        {
            "id" : "14",
            "name": "blackbary",
            "price": "210$",
            "category": "berry",
            "url": ""
        },
        {
            "id" : "15",
            "name": "chery",
            "price": "650$",
            "category": "berry",
            "url": ""
        },
        {
            "id" : "16",
            "name": "currant",
            "price": "530$",
            "category": "berry",
            "url": ""
        },
        {
            "id" : "17",
            "name": "cranberry",
            "price": "95$",
            "category": "berry",
            "url": ""
        },
        {
            "id" : "18",
            "name": "chokeberry",
            "price": "150$",
            "category": "berry",
            "url": ""
        },
        {
            "id" : "19",
            "name": "apple",
            "price": "200$",
            "category": "berry",
            "url": ""
        },
        {
            "id" : "20",
            "name": "goji berry",
            "price": "2900$",
            "category": "berry",
            "url": ""
        },
        {
            "id" : "21",
            "name": "gooseberry",
            "price": "120$",
            "category": "berry",
        }]
    })
})