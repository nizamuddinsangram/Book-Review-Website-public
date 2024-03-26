const BlogCard = ({ data }) => {
  const { id, date, image, heading, description } = data;

  return (
    <a
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={image}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {heading}
        </h3>
        <span className="text-xs text-gray-400">January 21, 2021</span>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default BlogCard;
