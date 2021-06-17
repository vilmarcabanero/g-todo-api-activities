import nodemailer from 'nodemailer';

const sendEmail = options => {
	const transporter = nodemailer.createTransport({
		service: process.env.EMAIL_SERVICE,
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const mailOptions = {
		from: process.env.EMAIL_FROM,
		to: options.to,
		subject: options.subject,
		html: options.text,
	};

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			console.log('Error: ', err.message);
		} else {
			console.log('Email sent!', info);
		}
	});
};

export default sendEmail;
