"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
function setSuccess(req, res, next) {
    res.send("success");
}
router.get("/", setSuccess);
exports.default = router;
