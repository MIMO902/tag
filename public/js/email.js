console.log("yyyy");
function sendMail() {
  console.log("xxxx");
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  const serviceID = "service_bc84yww";
  const templateID = "template_wlp72uc";

  emailjs
  .send(serviceID, templateID, params)
  .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("your message send succsefully");
    }).catch((err) => console.log(err));
}


