const Router  = require("express")
const cors = require("cors")
const router = new Router()
const CardInfoController = require('../controller/card.controller')

router.post('/card', CardInfoController.createCardInfo)
router.get('/card', cors(), CardInfoController.getCardInfo)
router.get('/card/:id', cors(),  CardInfoController.getOneCardInfo)
router.put('/card', CardInfoController.updateCardInfo)
router.delete('/card/:id', CardInfoController.deleteCardInfo)

module.exports = router