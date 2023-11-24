// "use strict";
// // require( 'dotenv/config' )
const nodemailer = require( "nodemailer" );

const transporter = nodemailer.createTransport( {
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
} );

// // async..await is not allowed in global scope, must use a wrapper
// // export async function main() {
// // send mail with defined transport object
// const info = await transporter.sendMail( {
//     from: process.env.EMAIL_ENVIO, // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
// } );

// console.log( "Message sent: %s", info.messageId );
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//     //
//     // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
//     //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
//     //       <https://github.com/forwardemail/preview-email>
//     //
// }
// // export default main


interface EmailProps {
    from: string;
    to: string;
    subject: string;
    text?: string;
}

export class Email implements EmailProps {
    from: string;
    to: string;
    subject: string;
    text?: string | undefined;

    constructor( email: string, from: string, to: string, subject: string, text: string ) {
        this.from = email;
        this.to = to;
        this.subject = subject;
        this.text = text;
    }

    info = transporter.sendMail( {
        from: process.env.EMAIL_ENVIO, // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    } );

}