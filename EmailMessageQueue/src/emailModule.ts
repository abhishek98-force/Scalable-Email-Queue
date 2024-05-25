export type emailBody = {
    to: string;
    subject: string;
    text: string;
    html: string;
}

export function sendEmail(data : emailBody){
    return new Promise( (resolve, reject) => {
        setTimeout( function () {
            console.log('This message will be logged after 2 sec');       
            resolve('Email sent successfully')    
        }, 2000);
    })
}