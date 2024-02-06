import { Schema, model } from "mongoose";

const logUsuarioSchema = new Schema(
  {
    emailUsuario: { type: String, require: true, unique: true, trim: true },
    login: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("LogsUsuario", logsUsuariosSchema);
