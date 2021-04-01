const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const Users = require("./routes/api/Users");
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, 
      useUnifiedTopology: true 
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/Users", Users);
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

// // Server static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('frontend/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//   });
// }

// app.get('/', function (req, res) {
//   res.render('index', {});
// });

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

