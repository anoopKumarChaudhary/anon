import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("server started");
    });
  })
  .catch((e) => {
    console.log(e);
  });
