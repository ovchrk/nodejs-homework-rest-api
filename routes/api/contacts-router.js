const express = require("express");
const cors = require("cors");

const router = express.Router();

const contactsController = require("../../controllers/contacts-controller");
const {
  isEmptyBody,
  isValidId,
  validateBody,
  authenticate,
} = require("../../middleware");

const {
  addSchema,
  updateSchema,
  updateFavoriteSchema,
} = require("../../models/Contact");
const { isEmptyFavorite } = require("../../middleware/isEmptyBody");

router.use(authenticate);

router.get("/", contactsController.getAll);

router.get("/:id", isValidId, contactsController.getById);

router.post("/", isEmptyBody, validateBody(addSchema), contactsController.add);

router.patch(
  "/:id/favorite",
  isValidId,
  isEmptyFavorite,
  validateBody(updateFavoriteSchema),
  contactsController.updateContact
);

router.delete("/:id", isValidId, contactsController.deleteContact);

router.put(
  "/:id",
  isEmptyBody,
  isValidId,
  validateBody(updateSchema),
  contactsController.updateContact
);

module.exports = router;
