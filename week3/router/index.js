
const express = require('express')
const router = express.Router();
const ctrl = require("../controller/home");

router.get('/', ctrl.output.index);
router.get("/main", ctrl.output.main);
router.get('/main/modal', ctrl.output.modal);
router.get("/wrong-id",ctrl.output.wrongID);
router.get("/wrong-password", ctrl.output.wrongPW);
router.post('/', ctrl.login);

module.exports = router;