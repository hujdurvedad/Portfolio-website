document.addEventListener("DOMContentLoaded", () => {
    const submitFormButton = document.getElementById("send-button");
    const formMessage = document.getElementById("form-message");

    submitFormButton.addEventListener("click", () => {
        let from_name = document.getElementById("name").value;
        let from_email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        if (!from_name || !from_email || !subject || !message) {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.className = "message error";
            formMessage.style.display = "block";

            setTimeout(() => {
                formMessage.style.display = "none";
            }, 5000);

            return;
        }

        emailjs.send("service_uz02zuc", "template_j0k57gb", {
            from_name: from_name,
            from_email: from_email,
            subject: subject,
            message: message,
        })
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                formMessage.textContent = "Your message has been sent successfully!";
                formMessage.className = "message success";
                formMessage.style.display = "block";

                setTimeout(() => {
                    formMessage.style.display = "none";
                }, 5000);

                document.getElementById("contact-form");

                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                formMessage.textContent = "There was an error sending your message. Please try again.";
                formMessage.className = "message error";
                formMessage.style.display = "block";

                setTimeout(() => {
                    formMessage.style.display = "none";
                }, 5000);
            });
    });
});