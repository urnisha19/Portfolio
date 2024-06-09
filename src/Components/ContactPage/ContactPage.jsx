const ContactPage = () => {
    return (
        <div className="mx-16">
            <section id="contact" className="contact-area">
                <div className="container">
                    <div className="section-title text-center pt-3">
                        <h1 className="text-center text-4xl font-bold mb-3 text-rebeccapurple">Get In Touch!</h1>
                        <h3>Feel free to contact me</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="py-3">
                                <form className="contact-form p-3" action="https://formspree.io/f/moqpyjvv" method="POST" id="contact-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control bg-transparent border border-rebeccapurple rounded-md p-2 w-full" name="name" placeholder="Your name..." required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control bg-transparent border border-rebeccapurple rounded-md p-2 w-full" name="email" placeholder="Your email address..." required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control bg-transparent border border-rebeccapurple rounded-md p-2 w-full" name="subject" placeholder="Subject..." required />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control bg-transparent border border-rebeccapurple rounded-md p-2 w-full" name="message" rows="4" placeholder="Your message..." required></textarea>
                                    </div>
                                    <input type="submit" className="form-control bg-rebeccapurple text-white font-semibold py-2 px-4 rounded-md cursor-pointer" value="Send Message" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
