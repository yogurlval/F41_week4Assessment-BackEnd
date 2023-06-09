const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment,
getFortune,
getAffirmations,
addAffirmation,
deleteAffirmation
 } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/affirmations", getAffirmations)
app.post("/api/affirmations", addAffirmation)
app.delete("/api/affirmations/:index", deleteAffirmation)

app.listen(4000, () => console.log("Server running on 4000"));
