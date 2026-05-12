
'use client'
import { useFetchUsers } from "@/_hooks/fetchUser";
import UserCards from "./_comps/UserCards";


const FetchApiUsers = () => {
    const { users, loading } = useFetchUsers();

    if (loading) return <div>Loading users...</div>;

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">User List</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {users.map((user) => (
                    // We use the ID as a key and spread the user object into props
                    <UserCards key={user.id} {...user} />
                ))}
            </div>
        </div>
    );
};

export default FetchApiUsers;