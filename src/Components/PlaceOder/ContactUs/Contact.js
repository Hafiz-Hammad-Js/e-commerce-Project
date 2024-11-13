import React from "react";
import "./Contact.css"



function ContactUs() {


    return <>
        <div className="container">
            <div className="ContactParent">

                <div className="childOne_Contact">
                    <div>
                        <div className="callWork_parent">
                            <div className="iconWork">
                                <img src="https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/icons-phone.png?raw=true" />
                            </div>
                            <h1 className="callWork">Call To Us</h1>
                        </div>
                        <p className="answer">
                            We are available 24/7, 7 days a week.
                        </p>
                        <p className="answer2">
                            Phone: +8801611112222
                        </p>

                        <div className="callWork_parent">
                            <div className="iconWork">
                                <img src=" https://github.com/Hafiz-Hammad-Js/E-commerce_images/blob/main/icons-mail.png?raw=true" />
                            </div>
                            <h1 className="callWork">Write To US</h1>
                        </div>
                        <p className="answer">
                            Fill out our form and we will contact you within 24 hours.
                        </p>
                        <p className="answer">
                            Emails: customer@brother.com
                        </p>
                        <p className="answer">
                            Emails: support@brother.com
                        </p>
                    </div>
                </div>
                
                <div className="childTwo_Contact">
                    <div>
                        <div className="inpusUser_contact">
                            <input placeholder="Your Name *" className="users" />
                            <input placeholder="Your Email *" className="users" />
                            <input placeholder="Your Phone *" className="users" />
                        </div>
                        <textarea placeholder="Your Massage" className="textarea"></textarea>
                        <div className="btnWork_Contact">
                            <button className="contactBTTn">Send Massage</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default ContactUs;