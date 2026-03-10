"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (_req, res) => {
    res.render("index", { title: "Home" });
});
router.get("/about", (_req, res) => {
    res.render("about", { title: "About" });
});
router.get("/contact", (_req, res) => {
    res.render("contact", { title: "Contact" });
});
exports.default = router;
