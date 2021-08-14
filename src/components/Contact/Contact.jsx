import React from "react";
import "./Contact.css";

const Contact = () => {
    React.useEffect(() => {
        const trimForEmail = (value) => {
            return value.replaceAll(" ", "%20").replaceAll("\n", "%0d%0a");
        };

        const updateMail = () => {
            const object = trimForEmail(document.querySelector(".contact-object-form").value);
            const description = trimForEmail(
                document.querySelector(".contact-description-form").value,
            );
            const submitForm = document.querySelector(".submit-form");
            if (object === "") {
                if (description === "") {
                    submitForm.href = "mailto:tcgmd@gmail.com";
                } else {
                    submitForm.href = "mailto:tcgmd@gmail.com?body=" + description;
                }
            } else {
                if (description === "") {
                    submitForm.href = "mailto:tcgmd@gmail.com?subject=" + object;
                } else {
                    submitForm.href =
                        "mailto:tcgmd@gmail.com?subject=" + object + "&body=" + description;
                }
            }
        };
        document.querySelector(".contact-object-form").addEventListener("keyup", () => {
            updateMail();
        });
        document.querySelector(".contact-description-form").addEventListener("keyup", () => {
            updateMail();
        });
    }, []);
    return (
        <div className="contact-container">
            <div className="contact-form">
                <div className="contact-object">
                    <h3 className="contact-object-label">Objet :</h3>
                    <input
                        type="text"
                        name="contact-object"
                        className="contact-object-form"
                        spellCheck="false"
                        placeholder="Entrez l'objet de votre requête"
                    />
                </div>
                <div className="contact-description">
                    <h3 className="contact-description-label">Message :</h3>
                    <textarea
                        name="contact-description"
                        className="contact-description-form"
                        spellCheck="false"
                        placeholder="Entrez votre message"
                    ></textarea>
                </div>
                <div className="contact-submit">
                    <a href="mailto:tcgmd@gmail.com" className="submit-form">
                        Envoyer
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
