import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Users.css'

function Users() {
  let [users, setUsers] = useState([]);
  let [usersLoading, setUsersLoading] = useState(false);

  useEffect(() => {
    setUsersLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users", { method: "get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setUsersLoading(false);
      })
      .catch((err) => {
        setUsersLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div className="userHolder">
      {usersLoading
        ? "Users loading..."
        : users.length
        ? users.map((userObj) => {
            return (
              <Link to={`/users/${userObj.id}`} className="user">
                <div>{userObj.name} </div>
                <div>{userObj.email} </div>
              </Link>
            );
          })
        : "There is not any posts"}
    </div>
  );
}

export default Users;
