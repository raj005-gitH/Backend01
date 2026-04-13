const waitlistModel = require("../models/waitlistSchema");

const createWaitList = async (req, res) => {
  const { first_name, last_name, email, phone_number, reason } = req.body;

  if (!first_name || !last_name || !email || !phone_number || !reason) {
    return res.status(400).json({
      status: "Failed",
      message: "Any of the field is missing",
    });
  }

  const newWaitlist = new waitlistModel({
    first_name,
    last_name,
    email,
    phone_number,
    reason,
  });

  await newWaitlist.save();

  res.status(201).json({
    status: "Success",
    message: "You have successfully joined the waitlist queue",
  });
};

module.exports = createWaitList;
