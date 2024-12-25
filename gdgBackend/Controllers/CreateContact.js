const sendEmail = require('../config/nodemailer');
const Contact = require('./../Models/Contact');

exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await sendEmail({
      to: email,
      subject: 'Thank you for contacting us!',
      text: `Hi ${name},\n\nThank you for reaching out! We have received your message:\n\n"${message}"\n\nWe'll get back to you soon.\n\nBest regards,\nGDG-MMMUT`,
    });
    newContact.emailSent = true;
    await newContact.save();
    
    
    return res.status(200).json({ message: 'Contact message Received and Email sent successfully' });

  } catch (error) {

    return res.status(400).json({ error: error.message });
  }
}

