import React from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";

const Posts = () => {
  return (
    <div className="container mx-auto p-4 grid grid-rows-2 grid-flow-col gap-4 ">
          <Post1/>
          <Post2/>
          <Post3/>
          <Post4/>
      </div>
  );
};

export default Posts;
