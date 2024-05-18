import "./Posts.css";
import { useEffect, useState } from "react";

function Posts(props) {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {posts.length
        ? posts.map((postObj) => {
            return (
              <div className="post">
                <p className="b1">
                  <b>Title:</b> {postObj.title}
                </p>
              </div>
            );
          })
        : "There is not any post"}
    </div>
  );
}
export default Posts;
