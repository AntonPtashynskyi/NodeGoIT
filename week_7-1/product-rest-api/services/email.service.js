const sgMail = require("@sendgrid/mail");
const { SEND_GRID_API_KEY, PORT } = require("../helpers/env");

const BASE_URL = `http://localhost:${PORT}/api/v1/auth/`;

const sendEmail = async (userEmail, verificationToken) => {
  sgMail.setApiKey(SEND_GRID_API_KEY);

  const confirmLink = `${BASE_URL}verify/${verificationToken}`;

  const msg = {
    to: userEmail, // Change to your recipient
    from: "onizukaebay@gmail.com", // Change to your verified sender
    subject: "Confirm your email",
    text: "Confirm your registration to Anton NODE Project page",
    html: `<h4>Click on link to confirm registration ${confirmLink}</h4>`,
  };

  try {
    const result = await sgMail.send(msg);
    // .then(() => {
    //   console.log("Email sent");
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

    console.log("result >>>>", result);
  } catch (error) {
    console.log("Error >>>", error);
    throw error;
  }
};

module.exports = {
  sendEmail,
};
