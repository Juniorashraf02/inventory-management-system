const express = require("express");
const {
  createProduct,
  getProducts,
  updateProduct,
  bulkUpdateProducts,
  deleteProducts,
} = require("../controller/product.controller");
const router = express.Router();

// router.post("/", createProduct).get("/", getProducts);
router.route("/").post(createProduct).get(getProducts);

router.patch("/bulk-update", bulkUpdateProducts);

router.delete("/delete", (req, res, next)=>{
    return res.send("hello")
});

router.patch("/:id", updateProduct);


// router.route("/:id").patch(updateProduct).delete(deleteProducts)

module.exports = router;
