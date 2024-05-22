import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { useParams } from "react-router-dom";

function PostDetails() {
  let [postDetails, setPostDetails] = useState(null);
  let [user, setUser] = useState(null);
  let params = useParams();
  let { postId } = params;
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "get",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!isEmpty(data)) {
          setPostDetails(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!isEmpty(postDetails)) {
      fetch(
        `https://jsonplaceholder.typicode.com/users/${postDetails.userId}`,
        {
          method: "get",
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (!isEmpty(data)) {
            setUser(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [postDetails]);
  return (
    <div>
      {user ? (
        <div>
          <b>User:</b> {user.name}
        </div>
      ) : (
        "No user"
      )}
      {postDetails ? (
        <>
          <div>
            <b>Title:</b> {postDetails.title}
          </div>
          <div>
            <b>Body:</b> {postDetails.body}
          </div>
        </>
      ) : (
        "No post data"
      )}
    </div>
  );
}
export default PostDetails;
