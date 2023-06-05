const Product = require("../../models/product.schema");



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