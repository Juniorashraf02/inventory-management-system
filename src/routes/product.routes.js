const express = require("express");
const router = express.Router();

const { getProducts } = require("../controller/ProductController/getProduct");
const {
  createProduct,
} = require("../controller/ProductController/createProduct");
const {
  updateProduct,
} = require("../controller/ProductController/updateProduct");
const {
  bulkUpdateProducts,
} = require("../controller/ProductController/bulkUpdate");
const {
  deleteProducts,
} = require("../controller/ProductController/deleteProduct");

router.route("/").post(createProduct).get(getProducts);

router.patch("/bulk-update", bulkUpdateProducts);

router.delete("/delete/:id", deleteProducts);

router.patch("update/:id", updateProduct);

module.exports = router;
