const Post1 = () => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image */}
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg"
          alt="JavaScript"
          className="w-full h-64 object-cover"
        />
  
        {/* Card Body */}
        <div className="p-4">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-2">JAVASCRIPT</h2>
  
          {/* Description */}
          <p className="text-gray-700 mb-4">
            JavaScript is the world's most popular lightweight, interpreted
            compiled programming language. It is also known as a scripting
            language for web pages. It is well-known for the development of web
            pages, and many non-browser environments also use it. JavaScript can
            be used for Client-side developments as well as Server-side
            developments.
          </p>
  
          {/* Read More Button */}
          <a
            href="#"
            className="inline-block px-4 py-2 bg-[#0c1846] text-white rounded hover:bg-blue-600 transition-colors"
          >
            Read More
          </a>
        </div>
      </div>
    );
  };
  
  export default Post1;
  