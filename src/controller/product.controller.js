const Product = require("../models/product.schema");

exports.createProduct = (req, res) => {
  Product.findOne({ name: req.body.name }).then(async (productExists) => {
    try {
      if (productExists) {
        return res.status(400).json({
          status: "failed",
          message: "Data exists already",
        });
      } else {
        // const data = await Product.create(req.body);
        const product = new Product(req.body);
        if (product.quantity === 0) {
          product.status = "out-of-stock";
        }
        const data = await product.save();

        res.status(200).json({
          status: "succes",
          message: "data inserted",
          data: data,
        });
      }
    } catch (error) {
      return res.status(400).json({
        status: "failed",
        message: "data is not inserted",
        error: error.message,
      });
    }
  });
};

exports.getProducts = async (req, res, next) => {
  const data = await Product.find({});

  res.status(200).json({
    data: data,
  });
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Product.updateOne(
      { _id: id },
      { $set: req.body },
      { runValidators: true }
    );

    res.status(200).json({
      status: "success",
      message: "Updated",
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: "data is not updated",
      error: error.message,
    });
  }
};

exports.bulkUpdateProducts = async (req, res, next) => {
  try {
    const data = await Product.updateMany(
      { _id: req.body.ids },
      { data: req.body.data },
      { runValidators: true }
    );

    res.status(200).json({
      status: "success",
      message: "updated",
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: "data is not updated",
      error: error.message,
    });
  }
};

// exports.deleteProducts = async (res, req, next) => {
//   try {
//     const { id } = req.params;
//     const result = await Product.deleteOne({ _id: id });
//     return res.status(200).send({
//       message: "product deleted!",
//     });
//   } catch (error) {
//     return res.status(400).send({
//       message: "something went wrong!",
//     });
//   }
// };
exports.deleteProducts = async (res, req, next) => {
  return res.send({
    msg: "hele"
  })
};
