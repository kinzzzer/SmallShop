const Router  = require("express")
const router = new Router()
const CardInfoController = require('../controller/card.controller')

router.post('/card', CardInfoController.createCardInfo)
router.get('/card', CardInfoController.getCardInfo)
router.get('/card/:id', CardInfoController.getOneCardInfo)
router.put('/card', CardInfoController.updateCardInfo)
router.delete('/card/:id', CardInfoController.deleteCardInfo)

module.exports = router