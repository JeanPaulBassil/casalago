import nodemailer from "nodemailer";

type SendMailParams = {
  to: string;
  name: string;
  subject: string;
  body: string;
};

export const sendMail = async ({ to, name, subject, body }: SendMailParams) => {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  // transporter over microsoft365
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  //   testing the connection
  try {
    const testResult = await transporter.verify();
    console.log("Server is ready to take our messages", testResult);
  } catch (error) {
    console.error("Error while verifying the connection", error);
    return;
  }

  // send mail with defined transport object
  try {
    const info = await transporter.sendMail({
      from: `"Fred Foo 👻" <${SMTP_EMAIL}>`, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: `Hello ${name}, ${body}`, // plain text body
      html: `<b>Hello ${name}, ${body}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error while sending the mail", error);
  }
};
