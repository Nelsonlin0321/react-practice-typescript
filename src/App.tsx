import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // axios
    //   .get<User[]>("https://jsonplaceholder.typicode.com/susers")
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => setError(err.message));

    fetch("https://jsonplaceholder.typicode.com/ussers")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Fail to fetch users data!");
        }
        return res.json();
      })
      .then((data: User[]) => setUsers(data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
