const Product = require("../../models/product.schema");

exports.getProducts = async (req, res, next) => {
  console.log(req.query);
  const queryObject = {...req.query};
  const excludedFields = ['sort', 'page', 'limit', 'quantity'];

  excludedFields.forEach(fields=> delete queryObject[fields]);

  const data = await Product.find(queryObject);
  console.log(queryObject);

  res.status(201).json({
    data: data,
  });
};



