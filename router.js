const express = require('express');
const smtpTransport = require('nodemailer-smtp-transport');
const router = express.Router();
//nodemailer
//smtpTransport=require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport(smtpTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user:'brayancreepy25@gmail.com',
        pass:'supersmashbrosultimate'
    }

}));



router.post('/send', (req,res)=>{

    let {to,subject,message, full_name} = req.body;
    
    contentHTML=`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    </head>
    <body>
    <div style="max-width:700px;
    margin-top:0;margin-left:auto;margin-bottom:0;margin-right:auto"> 
        <table border="0" cellpadding="0" cellspacing="0" dir="ltr" id="m_22375324755315983container" 
        style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#666666;font-family:Helvetica,Arial,sans-serif" width="100%"> 
        <tbody> 
        <tr> 
        <td align="left" id="m_22375324755315983preheaderRow" style="line-height:1em;text-align:left;font-size:12px;padding-top:0;padding-right:0;padding-bottom:12px;padding-left:0"></td> 
        </tr> 
        <tr> 
        <td align="left" id="m_22375324755315983logoRow" style="background-color:#f5f5f5;line-height:1em;padding-bottom:18px;padding-left:13px;padding-right:13px;padding-top:24px;text-align:left" valign="middle"> 
        <table align="left" cellpadding="0" cellspacing="0" id="m_22375324755315983logo" style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#666666;font-family:Helvetica,Arial,sans-serif" width="200"> 
        <tbody> 
        <tr> 
        </tr> 
        </tbody> 
        </table> 
        <table align="right" cellpadding="0" cellspacing="0" id="m_22375324755315983date" style="border-collapse:collapse;color:#666666;font-family:Helvetica,Arial,sans-serif;font-size:16px;text-align:right!important;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none" width="300"> 
        <tbody> 
        <tr> 
        <td align="right" id="m_22375324755315983Edition" height="26" style="line-height:1em;text-align:right;padding-top:0;padding-right:30px;padding-bottom:0;padding-left:0" valign="middle"></td> 
        </tr> 
        </tbody> 
        </table></td> 
        </tr> 
        <tr> 
        <td align="left" id="m_22375324755315983contentRow" style="background-color:#f5f5f5;line-height:1em;padding-bottom:13px;padding-left:13px;padding-right:13px;padding-top:0;text-align:left"> 
        <table cellpadding="0" cellspacing="0" id="m_22375324755315983moduleContainer" style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#666666;font-family:Helvetica,Arial,sans-serif" width="100%"> 
        <tbody> 
        <tr> 
        <td align="left" style="line-height:1em;text-align:left;padding-bottom:20px"> 
        <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;color:#666666;font-family:Helvetica,Arial,sans-serif;border-top-color:#e9e9e9;border-right-color:#e9e9e9;border-bottom-color:#e9e9e9;border-left-color:#e9e9e9;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px" width="100%"> 
        <tbody> 
        <tr> 
        <td align="left" style="background-color:#ffffff;line-height:1em;padding-bottom:30px;padding-left:31px;padding-right:31px;padding-top:30px;text-align:left"> 
        <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#666666;font-family:Helvetica,Arial,sans-serif" width="100%"> 
        <tbody> 
        <tr> 
        <td align="left" id="m_22375324755315983IntroHeadline" style="line-height:26px;text-align:left;font-size:14px;font-weight:normal;padding-bottom:10px">
        <span style="font-family:helvetica,arial,sans-serif;font-size:14px">
        Welcome, ${full_name}<br><br>
        Thank you for your application for the Associate BackEnd DEveliper track.<br><br>
        We are pleased to confirm your application has been accepted. 
        Please <a href="https://go.google-mkto.com/X2C0A2P3Ac00CYUJe017TI0" style="font-family:Helvetica,Arial,sans-serif;font-size:14px;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:normal;letter-spacing:normal;text-align:left;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:#ffffff;color:#4381fd;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://go.google-mkto.com/X2C0A2P3Ac00CYUJe017TI0&amp;source=gmail&amp;ust=1573939758104000&amp;usg=AFQjCNEzxxEGAIVzU_5PUO6K4afYvMqYrQ">set up your Coursera</a>&nbsp;account using the email address you used to apply for the Associate Cloud Engineer Track as soon as possible to prevent any issues when provisioning your benefits. <br><br>
        Please email <a href="https://go.google-mkto.com/WT0glAPUC3U1C2A00ecJW00" style="font-family:Helvetica,Arial,sans-serif;font-size:14px;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:normal;letter-spacing:normal;text-align:left;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:#ffffff;color:#4381fd;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://go.google-mkto.com/WT0glAPUC3U1C2A00ecJW00&amp;source=gmail&amp;ust=1573939758104000&amp;usg=AFQjCNFIrjDAFYUavwmkghyxKlb0abkv5Q">acecircuit@google.com</a> once you have successfully created the Coursera account.<br><br>
        Welcome to the Associate Cloud Engineer track!<br><br>
        Thank you,<br>
        The Google Cloud Platform Education Programs Team
        </span><br style="color:#666666;font-family:Verdana,Arial,Helvetica,sans-serif;font-size:14px;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:normal;letter-spacing:normal;text-align:left;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:#ffffff">
         </td> 
        </tr> 
        </tbody> 
        </table></td> 
        </tr> 
        </tbody> 
        </table></td> 
        </tr> 
        <tr> 
        <td align="left" id="m_22375324755315983emailCopyright" style="line-height:16px;text-align:left;padding-top:0;padding-right:30px;padding-bottom:21px;padding-left:30px"><a style="color:#666666!important;text-decoration:none" href="http//:apiway.io">apiway.io</a>
            <align="right" id="m_2237532475531598emailCopyright" style="line-height:16px;text-align:right;padding-top:0;padding-right:30px;padding-bottom:10px;padding-left:310px"><a style="color:#666666!important;" href="">Set Change the Notification</a></td> 
        </tr>
        
        <tr> 
        <td><a align="center"  style="line-height:16px;text-align:left;padding-top:0;padding-right:30px;padding-bottom:21px;padding-left:30px"><a style="color:#666666!important;text-decoration:none" >apiway.io</a></td> 
    </tr> 
    <tr> 
        <td><a align="center"  style="line-height:16px;text-align:left;padding-top:0;padding-right:0px;padding-bottom:21px;padding-left:400px"><a style="color:#666666!important;text-decoration:none" >apiway.io</a></td> 
    </tr> 
        </tbody> 
        </table></td> 
        </tr> 
        </tbody> 
        </table> 
        </div>
    </body>
    </html>`;
    
    /*var to = req.body.to;
    var subject = req.body.subject;
    var message = req.body.message;*/
    const mailOptions = {
        from: 'brayancreepy25@gmail.com',
        to:to,
        subject:subject,
        html: contentHTML
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log(`sent: ${info.response}`)
        }

    });

})


module.exports=router;