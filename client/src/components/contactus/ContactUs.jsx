import React from 'react'
import Header from '../header/Header'

export default function ContactUs() {
  return (
    <div>
      <>
    <Header/>
  <main>
    <div className="container">
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you! Contact us for inquiries, feedback, or to
          start planning your next event.
        </p>
        <div className="info">
          <div className="info-item">
            <ion-icon name="location-outline" />
            <p>NIEIT, MYSURU, India</p>
          </div>
          <div className="info-item">
            <ion-icon name="mail-outline" />
            <p>info@Eventor.com</p>
          </div>
          <div className="info-item">
            <ion-icon name="call-outline" />
            <p>+91 4567890123</p>
          </div>
        </div>
      </section>
      <section className="contact-form">
        <h2>Send us a Message</h2>
        <form action="submit.php" method="POST">
          <input type="text" name="name" placeholder="Your Name" required="" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required=""
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required=""
            defaultValue={""}
          />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  </main> 
  <footer>
    <p>© 2024 Eventor. All rights reserved.</p>
  </footer>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    background-color:  hsl(180, 98%, 31%);\n    color: #fff;\n    text-align: center;\n    padding: 20px 0;\n}\n\nheader h1 {\n    margin: 0;\n}\n\n.container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px;\n}\n\n.contact-info,\n.contact-form {\n    margin-bottom: 40px;\n}\n\n.contact-info h2,\n.contact-form h2 {\n    margin-top: 0;\n}\n\n.info {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.info-item {\n    flex: 1 1 50%;\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n.info-item ion-icon {\n    margin-right: 10px;\n}\n\n.contact-form input,\n.contact-form textarea {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n}\n\n.contact-form button {\n    background-color: #333;\n    color: #fff;\n    border: none;\n    padding: 10px 20px;\n    cursor: pointer;\n}\n\n.contact-form button:hover {\n    background-color: #555;\n}\n\nfooter {\n    background-color: #333;\n    color: #fff;\n    display: grid;\n    text-align: center;\n    padding: 5px 9px;\n    height: 43px;\n    position:relative;\n    bottom: 0;\n    width: 100%;\n}\n\n "
    }}
  />
</>

    </div>
  )
}
