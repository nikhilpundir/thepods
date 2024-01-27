import bcrypt from 'bcryptjs';
import transporter from "../config/otpMailer.js";

const sendContactDetails = async (req, res) => {
    const details=req.body;
    console.log(details);
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_CONTACT,
        subject: 'Customer Query',
        // html: `<p>Your OTP is:<br /><strong>${otp}<strong></p>`,
        html:`
        <div style="font-family: Helvetica, Arial, sans-serif; min-width: 1000px; overflow: auto; line-height: 2">
        <div style="margin: 50px auto; width: 70%; padding: 20px 0">
          <div style="border-bottom: 1px solid #eee">
            <a href="" style="font-size: 1.4em; color: #FF0000; text-decoration: none; font-weight: 600">ThePods</a>
          </div>
          <p style="font-size: 1.1em">New Inquiry from the Contact Form:</p>
      
          <p><strong>Name:</strong> ${details.name}</p>
          <p><strong>Email:</strong> ${details.email}</p>
          <p><strong>Phone No.:</strong> ${details.phone}</p>
          <p><strong>Message:</strong> ${details.message}</p>
      
          <p style="font-size: 1.1em">Please contact the user as soon as possible.</p>
          <p style="font-size: 0.9em;">Regards,<br />ThePods</p>
          <hr style="border: none; border-top: 1px solid #eee" />
          <div style="float: right; padding: 8px 0; color: #aaa; font-size: 0.8em; line-height: 1; font-weight: 300">
            <p>ThePods Inc</p>
            <p>Mahendragarh, Haryana</p>
            <!-- Add the specific address details here -->
          </div>
        </div>
      </div>
      
      `
      };

      transporter.sendMail(mailOptions);
      console.log("sent successfully");
    } catch (error) {
      console.log(error);
    }
  };

  export default sendContactDetails;