import { useEffect, useState } from "react";

function UserData() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then((data) => {
            setUser(data);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
        });    
}, []);

if (loading) {
    return <h3>Loading...</h3>;
}

return ( 
    <div>
    <h3>User Data</h3>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    </div>
);
}
export default UserData;