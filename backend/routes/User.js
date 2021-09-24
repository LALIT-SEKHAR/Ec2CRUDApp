const express = require("express");
const {
  AddUser,
  GetAllUser,
  DeleteUser,
  GetUser,
  UpdateUser,
} = require("../controller/User");
const router = express.Router();

router.get("/User", GetUser);
router.get("/getAllUser", GetAllUser);
router.post("/User", AddUser);
router.put("/User", UpdateUser);
router.delete("/User", DeleteUser);

module.exports = router;
