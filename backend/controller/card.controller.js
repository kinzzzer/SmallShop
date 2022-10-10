const db = require('../database/db')

class CardInfoController {
    async createCardInfo(req, res) {
        const {name_material, category, price, image} = req.body
        const newCard = await db.query(`INSERT INTO materials (name_material, category, price, image) values ($1, $2, $3, $4) RETURNING *`,
         [name_material, category, price, image])
        res.json(newCard.rows[0])

    }
    // async getCardInfo(req, res) {
    //     const cards = await db.query('SELECT * FROM materials')
    //     res.json(cards.rows)
    // }
    async getOneCardInfo(req, res) {
        const id = req.params.id
        const card = await db.query('SELECT * FROM materials where id = $1', [id])
        res.json(card.rows[0])
    }
    async updateCardInfo(req, res) {
        const {name_material, category, price, image, id} = req.body
        const card = await db.query(`UPDATE materials set name_material = $1, category = $2, price = $3, image = $4 where id = $5   RETURNING *`,
        [name_material, category, price, image, id]
        )
        res.json(card.rows[0])
    }
    async deleteCardInfo(req, res) {
        const id = req.params.id
        const card = await db.query('DELETE FROM materials where id = $1', [id])
        res.json(card.rows[0])
    }
}

module.exports = new CardInfoController()