import React from "react";

interface User {
  firstName: string;
  lastName: string;
  userName: string;
  img: string;
}

const UserCard = ({ firstName, lastName, userName, img }: User) => {
  return (
    <div className="w-full flex items-center h-[100px] hover:bg-gray-200">
      <div className="flex items-center w-full justify-between">
        <div className="flex space-x-1">
          {/* image */}
          <div className="w-12 h-12  overflow-hidden rounded-full bg-gray-200">
            <img src={img} alt="userName" />
          </div>

          {/* user */}
          <div>
            <p className="text-sm font-semibold">{`${firstName} ${lastName}`}</p>
            <p className="text-xs">@{userName}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 px-3 py-1 rounded-full text-white cursor-pointer">
        Follow
      </div>
    </div>
  );
};

export default UserCard;
