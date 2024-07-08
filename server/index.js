// write the starting code for the server here
const express = require('express');
const app = express();
const port = 3001;

const cors = require('cors');
const mongoose = require('mongoose');
const Finance = require('./models/fin');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/fintrack?readPreference=primary&appname=MongoDB%20Compass&ssl=false", {useNewUrlParser: true, useUnifiedTopology: true});

app.post("/insert",async (req, res) => {
   const name = req.body.name;
    const value = req.body.value;
    const ct = req.body.cat;
    const date = req.body.date;

    const fin = new Finance({name: name, value: value, cat: ct, date: date});
    await fin.save();
    res.send("Data inserted");
    
});

app.get("/read",async (req, res) => {
    const fin = await Finance.find();
    res.send(fin);
});

app.delete("/delete/:id", async (req,res)=>{
    const id = req.params.id;
    await Finance.findByIdAndDelete(id).exec();
    res.send("Deleted");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);



