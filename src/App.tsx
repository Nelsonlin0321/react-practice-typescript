import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => {
      controller.abort();
    };

    // fetch("https://jsonplaceholder.typicode.com/ussers")
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Fail to fetch users data!");
    //     }
    //     return res.json();
    //   })
    //   .then((data: User[]) => setUsers(data))
    //   .catch((err) => {
    //     setError(err.message);
    //   });
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://jsonplaceholder.typicode.com/susers"
    //     );
    //     const data: User[] = await response.json();
    //     setUsers(data);
    //   } catch (error: any) {
    //     console.error(error);
    //     setError(error.message);
    //   }
    //   fetchData();
    // };
    // const fetchUsers = async () => {
    //   try {
    //     const response = await axios.get<User[]>(
    //       "https://jsonplaceholder.typicode.com/susers"
    //     );
    //     const data = await response.data;
    //     setUsers(data);
    //   } catch (error) {
    //     setError((error as AxiosError).message);
    //   }
    //   fetchUsers();
    // };
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
