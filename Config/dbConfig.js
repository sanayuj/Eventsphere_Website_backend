const mongoose = require("mongoose");

module.exports = {
  dbConnection: async () => {
    try {
      await mongoose
        .connect("mongodb://localhost:27017/EventSphere"
)
        .then(() => {
          console.log("Database Connection successfully");
        });
    } catch (error) {
      console.log(error);
    }
  },
};