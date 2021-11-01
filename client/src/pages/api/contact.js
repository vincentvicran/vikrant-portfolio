import nodemailer from 'nodemailer';

export default (req, res) => {
    let { name, email, message } = req.body;

    // if the fields are empty we want to appear a message
    if (name.length === 0 || email.length === 0 || message.length === 0) {
        return res.json({ msg: 'Please provide adequate feedback!' });
    }

    console.log(process.env.EMAIL_HOST);
    //   we create a transporter
    let smtpTransport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: '037159eeaed9ba',
            pass: '301f586dff7a1a',
        },
        debug: true,
        logger: true,
    });

    // define the mailoptions
    let mailOptions = {
        from: email,
        to: 'vvicran@gmail.com',
        subject: `Message from ${name}`,
        html: `
    
    <h3 style="text-align: center">Informations</h3>
    <ul type="none" style="text-align: center">
    <li style="text-align: center">Name: ${name}</li>
    <li style="text-align: center">Email: ${email}</li>
   
    </ul>
    <hr/>
    <h3 style="text-align: center">Message</h3>
    <p style="text-align: center">${message}</p>
    
    
    `,
    };

    // 3.send the message with sendmail
    smtpTransport.sendMail(mailOptions, (err) => {
        try {
            if (err) {
                console.error(err);
                return res.status(400).json({ msg: 'Please fill all the fields!' });
            }
            res.status(200).json({ msg: 'Thank you! Your message has been delivered to Vikrant!' });
        } catch (err) {
            if (err) return res.status(500).json({ msg: 'There is a potential server error!' });
        }
    });
};
