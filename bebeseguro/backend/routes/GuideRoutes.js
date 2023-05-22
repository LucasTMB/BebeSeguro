const express = require("express");
const router = express.Router();

// Controller
const {
  createGuide,
  deleteGuide,
  getAllGuides,
  getUserGuides,
  getGuideById,
  updateGuide,
  searchGuides,
} = require("../controllers/GuideController");

// Middlewares
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidations");
const {
  guideCreateValidation,
  guideUpdateValidation,
} = require("../middlewares/guideValidations");
const { imageUpload } = require("../middlewares/imageUpload");

// Routes
router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  validate,
  createGuide
);
router.delete("/:id", authGuard, deleteGuide);
router.get("/", getAllGuides);
router.get("/user/:id", getUserGuides);
router.get("/search", searchGuides);

router.get("/:id", getGuideById);
router.put(
  "/:id",
  authGuard,
  imageUpload.single("image"),
  validate,
  updateGuide
);

module.exports = router;
