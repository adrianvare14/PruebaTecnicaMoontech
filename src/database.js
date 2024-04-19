import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(
      "mongodb+srv://adrianvarela:p5usDWlCJL1p1lRF@cluster0.8fp7j8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DB connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
