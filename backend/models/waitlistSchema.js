const mongoose = require("mongoose");

const waitlistSchema = mongoose.Schema({
    first_name: { type: String, required: true, trim: true},
    last_name: {type: String, default: ""},
    email: {type: String, required: true, unique: true},
    phone_number: {type: String, required: true},
    reason: {type: String, required: true},

    created_at: {type: Date, default: Date.now}
})

const waitlistModel = mongoose.model("waitlistModel", waitlistSchema);

module.exports = waitlistModel;