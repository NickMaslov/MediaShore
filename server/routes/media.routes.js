const express = require("express");

const mediaCtrl = require("../controllers/user.controller");
const userCtrl = require("../controllers/user.controller");
const authCtrl = require("../controllers/auth.controller");

const router = express.Router();

router.route("/new/:userId").post(authCtrl.hasAuthorization, mediaCtrl.create);

router.route("/video/:mediaId").get(mediaCtrl.video);

router.route("/popular").get(mediaCtrl.listPopular);

router.route("/related/:mediaId").get(mediaCtrl.listRelated);

router.route("/by/:userId").get(mediaCtrl.listByUser);

router
  .route("/:mediaId")
  .get(mediaCtrl.incrementViews, mediaCtrl.read)
  .put(authCtrl.hasAuthorization, mediaCtrl.isPoster, mediaCtrl.update)
  .delete(authCtrl.hasAuthorization, mediaCtrl.isPoster, mediaCtrl.remove);

router.param("userId", userCtrl.userByID);
router.param("mediaId", mediaCtrl.mediaByID);

module.exports = router;
