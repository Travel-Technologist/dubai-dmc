const { sendContactEmail } = require("../services/emailService");

const sendContactForm = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      destination,
      travelDate,
      travellers,
      message
    } = req.body;

    const emailResult = await sendContactEmail({
  fullName,
  email,
  phone,
  destination,
  travelDate,
  travellers,
  message
});

if (!emailResult.success) {
  return res.status(500).json({
    success: false,
    message: "Unable to process contact request."
  });
}

    return res.status(200).json({
      success: true,
      message: "Contact form received successfully.",
      data: {
        fullName,
        email,
        phone,
        destination,
        travelDate,
        travellers,
        message
      }
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });

  }
};

module.exports = {
  sendContactForm
};

