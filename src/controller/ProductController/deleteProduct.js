const Product = require("../../models/product.schema");


exports.deleteProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Product.deleteOne({ _id: id });

    if (!result.deletedCount)
      return res.status(400).json({
        status: "Failed",
        message: "Product doesn't exist",
      });

    res.status(201).json({
      message: "Product deleted successfully...!!!",
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: "data is not deleted",
      error: error.message,
    });
  }
};
