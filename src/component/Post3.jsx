const Post3 = () => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image */}
        <img
          src="https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png"
          alt="Algorithm"
          className="w-full h-64 object-cover"
        />
  
        {/* Card Body */}
        <div className="p-4">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-2">Algorithm</h2>
  
          {/* Description */}
          <p className="text-gray-700 mb-4">
            The word Algorithm means “a process or set of rules to be followed in
            calculations or other problem-solving operations”. Therefore, Algorithm
            refers to a set of rules/instructions that step-by-step define how a
            work is to be executed upon in order to get the expected results.
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
  
  export default Post3;
  