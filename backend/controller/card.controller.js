const db = require('../database/db')

class CardInfoController {
    async createCardInfo(req, res) {
        const { nameMaterial, categoryMaterial, price, image, amount } = req.body
        const newCard = await db.query(`INSERT INTO materials (nameMaterial, categoryMaterial, price, image, amount) values ($1, $2, $3, $4, $5) RETURNING *`,
            [nameMaterial, categoryMaterial, price, image, amount])
        res.json(newCard.rows[0])

    }
    async getCardInfo(req, res) {
        const limit = req.query.limit || 10
        const offset = req.query.offset || 0
        const cards = await db.query(
            `SELECT * FROM materials ORDER BY ID ASC LIMIT ${limit} OFFSET ${offset}`)
        res.json({ items: cards.rows, cardCount: cards.rowCount, limit, offset })
    }
    async getOneCardInfo(req, res) {
        const id = req.params.id
        const card = await db.query('SELECT * FROM materials where id = $1', [id])
        res.json(card.rows[0])
    }
    async updateCardInfo(req, res) {
        const { nameMaterial, categoryMaterial, price, image, amount, id } = req.body
        const card = await db.query(`UPDATE materials set nameMaterial = $1, categoryMaterial = $2, price = $3, image = $4 amount = $5 where id = $6   RETURNING *`,
            [nameMaterial, categoryMaterial, price, image, amount, id]
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