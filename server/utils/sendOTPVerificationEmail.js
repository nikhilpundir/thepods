import bcrypt from 'bcryptjs';
import transporter from "../config/otpMailer.js";
import UserOTPVerification from "../models/userOTPVerification.js";

const generateUniqueOTP = async () => {
    let otp;
    do {
      otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    } while (await UserOTPVerification.findOne({ otp }));
  
    return otp;
  };

const sendOTPVerificationEmail = async ({ _id, email }, res) => {
    try {
      const otp = await generateUniqueOTP();
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verify Your Email',
        // html: `<p>Your OTP is:<br /><strong>${otp}<strong></p>`,
        html:`<div style="font-family: Helvetica, Arial, sans-serif; min-width: 1000px; overflow: auto; line-height: 2">
        <div style="margin: 50px auto; width: 70%; padding: 20px 0">
          <div style="border-bottom: 1px solid #eee">
            <a href="" style="font-size: 1.4em; color: #FF0000; text-decoration: none; font-weight: 600">ThePods</a>
          </div>
          <p style="font-size: 1.1em">Hi,</p>
          <p>Thank you for choosing ThePods. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
          <h2 style="background: #00466a; margin: 0 auto; width: max-content; padding: 0 10px; color: #fff; border-radius: 4px;">${otp}</h2>
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
  
      const saltRounds = 10;
      const hashedOTP = await bcrypt.hash(otp, saltRounds);
  
      const newOTPVerification = await new UserOTPVerification({
        userId: _id,
        otp: hashedOTP,
        createdAt: Date.now(),
        expiresAt: Date.now() + 3600000,
      });
  
      await newOTPVerification.save();
      
      transporter.sendMail(mailOptions);
      console.log("sent successfully");
    } catch (error) {
      console.log(error);
    }
  };

  export default sendOTPVerificationEmail;