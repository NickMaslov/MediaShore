const router = require("express").Router();

const auth = require("./auth.routes");
const user = require("./user.routes");
// const media = require("./media.routes");

router.use("/auth", auth);
router.use("/users", user);
// router.use("/media", user);

module.exports = router;
