import { Schema, model } from "mongoose";

const logUsuarioSchema = new Schema(
  {
    email: { type: String, require: true, trim: true },
    login: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("LogUsuario", logUsuarioSchema);
