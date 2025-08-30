const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");


main()
    .then(() => {
        console.log(`connected to dataBase`);
    })
    .catch((err) => {
        console.log(err);
    });

async function main(){
    await mongoose.connect(MONGO_URL);
};

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.send(`Hi, I am root`);
});


app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);


// app.all("*", (req, res, next) => {   // ye "* wala mere pc per kabhi kaam nahi karta"
//     next(new ExpressError(404, "Page not Found"));
// });

app.all(/.*/, (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});


// ye function primarially price validation ke 
// lea likha hai but ye uske lea use nahi hoga 
// kyuki final stage me maine new.ejs me price 
// me type number rakh ke choda hai iske wajaha 
// se usme char val enter nahi ki ja sakti:)
app.use((err, req, res, next) => {
    let {statusCode = 500, message = "Something got Fu*ked up   "} = err;
    res.status(statusCode).render("error.ejs", {message});
    // res.status(statusCode).send(message);
});

app.listen(port, () => {
    console.log(`server is on port ${port}`);
});