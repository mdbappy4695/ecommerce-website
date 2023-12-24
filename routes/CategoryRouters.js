import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategory,
  singlecategoryController,
  updateCategoryController,
} from "./../controllers/createCategoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

///update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getAl category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singlecategoryController);

//delete category
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategory);
export default router;
