import { Schema, model } from "mongoose";

const usuarioSchema = new Schema(
  {
    nombre: { type: String, require: true, trim: true },
    contrasenya: { type: String, require: true, trim: true },
    email: { type: String, require: true, unique: true, trim: true },
    activo: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Usuario", usuarioSchema);
