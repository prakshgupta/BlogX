const Post4 = () => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image */}
        <img
          src="https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png"
          alt="Computer Network"
          className="w-full h-64 object-cover"
        />
  
        {/* Card Body */}
        <div className="p-4">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-2">Computer Network</h2>
  
          {/* Description */}
          <p className="text-gray-700 mb-4">
            An interconnection of multiple devices, also known as hosts, that are
            connected using multiple paths for the purpose of sending/receiving
            data media. Computer networks can also include multiple devices/mediums
            which help in the communication between two different devices; these
            are known as Network devices and include things such as routers,
            switches, hubs, and bridges.
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
  
  export default Post4;
  