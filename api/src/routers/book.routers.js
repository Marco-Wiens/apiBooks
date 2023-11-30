const { Router } = require("express");
const router = Router();
const bookCtrl = require("../controller/book.controller");

router.get("/books", bookCtrl.getBooks);

router.post("/books", bookCtrl.postBook);

router.put("/books", bookCtrl.putBook);

router.delete("/books", bookCtrl.deleteBook);


module.exports = router;