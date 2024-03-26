const BlogCard = () => {
  return (
    <div>
      <a
        rel="noopener noreferrer"
        href="#"
        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900"
      >
        <img
          src="https://source.unsplash.com/random/480x360"
          alt=""
          className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
        />
        <div className="p-6 space-y-2 lg:col-span-5">
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
            Noster tincidunt reprimique ad pro
          </h3>
          <span className="text-xs text-gray-400">February 19, 2021</span>
          <p>
            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
            graece fuisset, eos affert putent doctus id.
          </p>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
