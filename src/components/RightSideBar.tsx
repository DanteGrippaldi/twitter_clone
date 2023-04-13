import { useState, useEffect } from "react";
import UserCard from "./UserCard";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const RightSideBar = () => {
  const [users, setUsers] = useState<Users>([
    {
      firstName: "",
      lastName: "",
      username: "",
      image: "",
    },
  ]);

  interface User {
    firstName: string;
    lastName: string;
    username: string;
    image: string;
  }

  type Users = User[];

  const fetchUsers = async () => {
    const url = "https://dummyjson.com/users";
    const response = await fetch(url);
    const responseJson = await response.json();
    setUsers(responseJson.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-5 w-[350px] hidden lg:inline">
      {/* input */}
      <div className="sticky top-0 py-2 bg-white">
        <div className="flex space-x-2 items-center bg-gray-100 rounded-full p-2">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
          <input
            className="outline-none bg-transparent flex-grow"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      <div className="mt-5 p-5 w-full h-fit bg-gray-100 rounded-2xl">
        {/* who to follow */}
        <div>
          <h3 className="text-xl font-bold">Who to follow</h3>
        </div>

        {/* users */}
        <div className="">
          {users?.map((user, i) => (
            <div key={i}>
              <UserCard
                firstName={user.firstName}
                lastName={user.lastName}
                userName={user.username}
                img={user.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
