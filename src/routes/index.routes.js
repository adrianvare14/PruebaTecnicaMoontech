import { Router } from "express";
import Usuario from "../models/Usuario";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/registrar", async (req, res) => {
  const usuarios = await Usuario.find().lean();
  res.render("registrar", { usuarios: usuarios });
});

router.post("/usuario/add", async (req, res) => {
  try {
    const usuario = Usuario(req.body);
    const usuarioRegistrado = await usuario.save();
  } catch (error) {
    console.log(error.message);
  }
  res.redirect("/registrar");
});

router.get("/editar/:id", async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id).lean();
    res.render("editar", { usuario: usuario });
  } catch (error) {
    console.log(error.message);
    res.redirect("/registrar");
  }
});

router.post("/editar/:id", async (req, res) => {
  try {
    await Usuario.findByIdAndUpdate(req.params.id, req.body);
  } catch (error) {
    console.log(error.message);
  }
  res.redirect("/registrar");
});

router.get("/eliminar/:id", async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
  } catch (error) {
    console.log(error.message);
  }
  res.redirect("/registrar");
});

export default router;
