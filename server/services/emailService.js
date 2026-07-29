const resend = require("../config/resend");

const sendContactEmail = async (data) => {
  try {
    const response = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.FROM_EMAIL,
      subject: `🌍 New Website Enquiry from ${data.fullName}`,

      html: `
      <div style="font-family:Arial,sans-serif;padding:20px">
        <h2>New Contact Form Submission</h2>

        <table border="1" cellpadding="10" cellspacing="0">
          <tr>
            <td><b>Name</b></td>
            <td>${data.fullName}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>${data.email}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>${data.phone}</td>
          </tr>

          <tr>
            <td><b>Destination</b></td>
            <td>${data.destination}</td>
          </tr>

          <tr>
            <td><b>Travel Date</b></td>
            <td>${data.travelDate}</td>
          </tr>

          <tr>
            <td><b>Travellers</b></td>
            <td>${data.travellers}</td>
          </tr>

          <tr>
            <td><b>Message</b></td>
            <td>${data.message}</td>
          </tr>
        </table>
      </div>
      `,
    });

    console.log(response);

    return {
      success: true,
      response,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error,
    };
  }
};

module.exports = {
  sendContactEmail,
};