import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(
      "mongodb+srv://adrianvarela:hccq3ksSiblbUcWZ@cluster0.5n6rbys.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("DB connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
