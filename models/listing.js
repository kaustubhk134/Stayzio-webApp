const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: 
            "https://unsplash.com/photos/fuji-mountain-and-cherry-blossoms-in-spring-japan-DKgg4FtXAHw",

        set: (v) => 
            v === ""
             ? "https://unsplash.com/photos/fuji-mountain-and-cherry-blossoms-in-spring-japan-DKgg4FtXAHw"
             : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   image: {
//     filename: String,
//     url: {
//       type: String,
//       default: "https://unsplash.com/photos/fuji-mountain-and-cherry-blossoms-in-spring-japan-DKgg4FtXAHw",
//       set: (v) => 
//         v === "" 
//         ? "https://unsplash.com/photos/fuji-mountain-and-cherry-blossoms-in-spring-japan-DKgg4FtXAHw"
//         : v,
//     }
//   },
//   price: Number,
//   location: String,
//   country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;
