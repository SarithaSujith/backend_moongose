const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();
app.use(express.json());
// // const username = "mongodb Saritha";
// // const password = "Sari123!";
// // const cluster = "cluster0";
// // const dbname = "myFirstDatabase";

// // mongoose.connect(
// //   `mongodb+srv://${username}:${password}@${cluster}.khzpx.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );
mongoose.connect(
	'mongodb+srv://Saritha:Sari123!@cluster0.khzpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	() => {
		console.log('connected');
	},
	(e) => console.log(e)
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
