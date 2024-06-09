import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function GithubUserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users`)
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      ) : (
        !loading && !error && <div>Add a user and select them</div>
      )}
    </div>
  );
}
