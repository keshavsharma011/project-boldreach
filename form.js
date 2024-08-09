const form = document.querySelector("form");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const mess = document.getElementById("message");

function sendEmail(){
  const bodyMessage = `Your Name: ${name.value}<br> Email ID: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
  
  Email.send({
      Host: "smtp.elasticemail.com",
      Username: "boldreach.in@gmail.com",
      Password: "7EB93303A4075A0F56226A46F8650A32774C",
      To: 'boldreach.in@gmail.com',
      From: 'boldreach.in@gmail.com',
      Subject: "Project Enquiry",
      Body: bodyMessage
  }).then(
      message => {
          if (message == "OK"){
              Swal.fire({
                  title: "Success!",
                  text: "Message sent Successfully!",
                  icon: "success"
              });
          } else {
              Swal.fire({
                  title: "Error!",
                  text: "Message failed to send!",
                  icon: "error"
              });
          }
      }
  ); 
}
