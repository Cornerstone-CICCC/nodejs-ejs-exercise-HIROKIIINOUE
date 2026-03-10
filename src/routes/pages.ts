import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.render("index", { title: "Home" });
});

router.get("/about", (_req, res) => {
  res.render("about", { title: "About" });
});

router.get("/contact", (_req, res) => {
  res.render("contact", { title: "Contact" });
});

export default router;
