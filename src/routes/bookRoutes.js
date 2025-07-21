
const express = require('express');
const {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(protect); 

router.route('/').post(createBook).get(getBooks);
router.route('/:id').get(getBook).put(updateBook).delete(deleteBook);

module.exports = router;
