import "./Posts.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
              <Link to={`/posts/${postObj.id}`} className="post" >
                <b>Title:</b> {postObj.title}
              </Link>
            );
          })
        : "There is not any post"}
    </div>
  );
}
export default Posts;
