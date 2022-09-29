const db = require('../database')

class CardInfoController {
    async createCardInfo(req, res) {
        const {name_material, category, price} = req.body
        const newCard = await db.query(`INSERT INTO material (name_material, category, price) values ($1, $2, $3) RETURNING *`,
         [name_material, category, price])
        res.json(newCard.rows[0])

    }
    async getCardInfo(req, res) {
        const cards = await db.query('SELECT * FROM material')
        res.json(cards.rows)
    }
    async getOneCardInfo(req, res) {
        const id = req.params.id
        const card = await db.query('SELECT * FROM material where id = $1', [id])
        res.json(card.rows[0])
    }
    async updateCardInfo(req, res) {
        const {name_material, category, price, id} = req.body
        const card = await db.query(`UPDATE material set name_material = $1, category = $2, price = $3 where id = $4   RETURNING *`,
        [name_material, category, price, id]
        )
        res.json(card.rows[0])
    }
    async deleteCardInfo(req, res) {
        const id = req.params.id
        const card = await db.query('DELETE FROM material where id = $1', [id])
        res.json(card.rows[0])
    }
}

module.exports = new CardInfoController()