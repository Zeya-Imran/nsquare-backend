import Product from "./products.schema.js";

//create product
export const createProduct = async (req, res) => {
  console.log(req.body);
  try {
    const { title, description, price, isBestSeller, isRecommended, isLive } =
      req.body;
    if (
      !title &&
      !description &&
      !price &&
      !isBestSeller &&
      !isRecommended &&
      !isLive
    )
      throw new Error("all field required");
    const response = new Product({
      title,
      description,
      price,
      isBestSeller,
      isRecommended,
      isLive,
    });
    const newProduct = await response.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "unable to create product now",
    });
  }
};

//get all data
export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "unable to get all data",
    });
  }
};

//get product by id
export const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId)
      return res.status(401).json({
        success: false,
        message: "ID is required",
      });
    const prodcut = await Product.findById({ _id: productId });
    if (!prodcut)
      return res
        .status(404)
        .json({ success: false, message: "Product is not available..." });
    res.status(200).json(prodcut);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//update by id
export const updateProduct = async (req, res) => {
  try {
    const updateId = req.params.id;
    if (!updateId) {
      return res.status(400).json({
        success: false,
        message: "ID is required",
      });
    }

    if (!Object.keys(req.body).length) {
      return res.status(400).json({
        success: false,
        message: "No fields to update",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(updateId, req.body, {
      new: true,
    });

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//delete product
export const deleteProduct = async (req, res) => {
  try {
    const deleteId = req.params.id;
    if (!deleteId)
      return res
        .status(401)
        .json({ success: false, message: "ID is required" });
    const deletedproduct = await Product.findByIdAndDelete({ _id: deleteId });
    if (!deletedproduct)
      return res
        .status(404)
        .json({ success: false, message: "Prodcut not found" });
    res.status(204).json({ success: true, message: "product deleted" });
  } catch (error) {
    res.status(5600).json({
      success: false,
      message: error.message,
    });
  }
};
