const Product = require("../../models/product.schema");

exports.getProducts = async (req, res, next) => {
  const data = await Product.find({});

  res.status(201).json({
    data: data,
  });
};



