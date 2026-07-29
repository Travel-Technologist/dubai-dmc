const contactValidation = (req, res, next) => {
  const {
    fullName,
    email,
    phone,
    destination,
    travelDate,
    travellers,
    message
  } = req.body;

  // Full Name
  if (!fullName || fullName.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Full Name is required."
    });
  }

  // Email
  if (!email || email.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Email is required."
    });
  }

  // Phone
  if (!phone || phone.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Phone Number is required."
    });
  }

  // Destination
  if (!destination || destination.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Destination is required."
    });
  }

  // Travel Date
  if (!travelDate || travelDate.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Travel Date is required."
    });
  }

  // Travellers
  if (!travellers) {
    return res.status(400).json({
      success: false,
      message: "Travellers is required."
    });
  }

  // Message
  if (!message || message.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Message is required."
    });
  }

  next();
};

module.exports = contactValidation;