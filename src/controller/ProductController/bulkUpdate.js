
const Product = require("../../models/product.schema");

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