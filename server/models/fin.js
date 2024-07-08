
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const finSchema = new Schema({
    name :
    {
        type: String,
        required: true,
    },
    value :
    {
        type: Number,
        required: true,
    },
    cat :
    {
        type: String,
        required: true,
    },
    date :
    {
        type: Date,
        required: true,
    },
    });

const Finmd = mongoose.model('fintrk', finSchema);

module.exports = Finmd;