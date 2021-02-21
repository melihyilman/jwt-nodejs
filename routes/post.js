const router = require("express").Router();
const verify = require("./verifyToken");
router.get("/", verify, (req, res) => {
  res.json({
    posts: { title: "teyteytey", description: "You cant access here " },
  });
});

module.exports = router;
