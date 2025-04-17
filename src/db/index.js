import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionRef = await mongoose.connect(
      "mongodb+srv://anoop:anoop1234@cluster0.pinzz.mongodb.net/databases?retryWrites=true&w=majority&appName=Cluster0"
    );
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
