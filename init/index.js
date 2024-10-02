const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://chitchat:ChitChat%402004@cluster0.wu40t.mongodb.net/saas?retryWrites=true&w=majority&appName=Cluster0";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    // await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => (
        {
            ...obj,
            owner: "66fc2a18b90df313b48ca417",
        }
    ))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();