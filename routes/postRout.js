const router = require('express').Router();
const { Theme, Post } = require('../db/models');

// отрисовка страницы с постами
router.get('/', async (req, res) => {
  const response = await Theme.findAll({ raw: true });
  console.log(response);
  res.render('post', { titles: response });
});


module.exports = router;
