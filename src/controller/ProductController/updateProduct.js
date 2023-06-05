
const Product = require("../../models/product.schema");

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