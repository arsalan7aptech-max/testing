export default function ContactPage() {
  return (
    <>
    <div>
     <h2 className="text-4xl font-bold mt-6 text-center">Contact Us</h2>
    <div className="min-h-screen mt-6 p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side */}
        <div className="bg-black text-white p-10 flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold mb-6">
            Contact Us
          </h1>

          <p className="text-lg text-gray-300 leading-8 mb-8">
            Have questions or want to work with us? Fill out the form and our
            team will get back to you as soon as possible.
          </p>

          <div className="space-y-6 text-lg">
            <div>
              <h3 className="font-bold">Email</h3>
              <p className="text-gray-300">saim@gmail.com</p>
            </div>

            <div>
              <h3 className="font-bold">Phone</h3>
              <p className="text-gray-300">+92 300 1234567</p>
            </div>

            <div>
              <h3 className="font-bold">Address</h3>
              <p className="text-gray-300">
                Karachi, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-10 bg-white">
          <h2 className="text-4xl font-bold mb-8 text-black">
            Send Message
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border-2 border-gray-300 rounded-xl p-4 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border-2 border-gray-300 rounded-xl p-4 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border-2 border-gray-300 rounded-xl p-4 outline-none focus:border-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl text-lg font-semibold hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
