const ContactPage = () => {
  return (
    <div className="mx-16">
      <section id="contact" className="contact-area">
        <div className="container mx-auto">
          <div className="section-title text-center pt-3">
            <h1 className="text-4xl font-bold mb-3 text-rebeccapurple">Get In Touch!</h1>
            <h3 className="text-lg text-gray-700">Feel free to contact me</h3>
          </div>

          <div className="max-w-xl mx-auto py-6">
            <form
              className="contact-form p-6 bg-white shadow-md rounded-lg"
              action="https://formspree.io/f/moqpyjvv"
              method="POST"
              id="contact-form"
            >
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name..."
                  required
                  className="w-full p-3 border border-rebeccapurple rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-rebeccapurple"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address..."
                  required
                  className="w-full p-3 border border-rebeccapurple rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-rebeccapurple"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject..."
                  required
                  className="w-full p-3 border border-rebeccapurple rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-rebeccapurple"
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your message..."
                  required
                  className="w-full p-3 border border-rebeccapurple rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-rebeccapurple resize-none"
                />
              </div>

              <input
                type="submit"
                value="Send Message"
                className="w-full bg-rebeccapurple text-white font-semibold py-3 rounded-md cursor-pointer hover:bg-purple-800 transition-colors"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
