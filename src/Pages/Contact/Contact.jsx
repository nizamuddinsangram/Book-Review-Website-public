import image from "../../../public/img4.avif";

const Contact = () => {
  return (
    <section className="p-6 bg-gray-800 text-gray-100 rounded-lg  h-[82vh] ">
      <div className="container grid h-3/4 gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full h-3/4 px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
          <span className="block mb-2 text-violet-400">Book vibe contact</span>
          <h1 className="text-5xl font-extrabold text-gray-50">
            Book with Book vibe
          </h1>
          <p className="my-8">
            <span className="font-medium text-gray-50">
              Modular and versatile.
            </span>
            Go to blog site and select your favourite book and wait for
            notification.Stay with Book vibe website.
          </p>
          <form novalidate="" action="" className="self-stretch space-y-3">
            <div>
              <label for="name" className="text-sm sr-only">
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-md focus:ring text-black focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div>
              <label for="email" className="text-sm sr-only">
                Email address
              </label>
              <input
                id="email"
                type="text"
                placeholder="Email address"
                className="w-full rounded-md text-black focus:ring focus:ring-violet-400 border-gray-700"
              />
            </div>
            <button
              type="button"
              className="w-full py-2 font-semibold rounded bg-violet-400 text-gray-900"
            >
              Join the waitlist
            </button>
          </form>
        </div>
        <img
          src={image}
          alt=""
          className="object-cover w-full h-3/4 rounded-md xl:col-span-3 bg-gray-500"
        />
      </div>
    </section>
  );
};

export default Contact;
