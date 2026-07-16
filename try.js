// function sendmail(){
//     let prop ={
//         name :document.getElementById("name").value,
//         email : document.getElementById("email").value,
//         subject : document.getElementById("subject").value,
//         message : document.getElementById("message").value
//     }
//     emailjs.send("service_pge8pc6","template_sgrvq58",prop).then(alert("your email is sented"));
// }
// document.getElementById("submit").addEventListener("click",sendmail());

function sendmail() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;

    let prop = {
        fname: fname,
        lname: lname,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_pge8pc6", "template_sgrvq58", prop)
        .then(function () {
            alert("Your email has been sent!");
        })
        .catch(function (error) {
            console.log("EmailJS error:", error);
            alert("Something went wrong. Please try again.");
        });
}

document.getElementById("f1").addEventListener("submit", function (e) {
    e.preventDefault();
    sendmail();
});