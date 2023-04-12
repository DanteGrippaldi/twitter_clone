import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  EllipsisHorizontalIcon,
  ChatBubbleLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ChartBarIcon,
  ArrowUpTrayIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

interface Post {
  body: string;
  reactions: number;
  userId: number;
}

const Post = ({ body, reactions, userId }: Post) => {
  const feed = useSelector((state) => state.post.value);
  const userName = useSelector((state) => state.user.value);
  const [user, setUser] = useState(0);

  const fetchUser = async () => {
    const url = `https://dummyjson.com/users/${userId}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setUser(responseJson);
  };

  useEffect(() => {
    fetchUser();
  }, [feed]);

  return (
    <div className="w-full h-fit border-b-2 border-gray-100 hover:bg-gray-100">
      <div className="flex">
        {/* left */}
        <div className="w-fit h-full p-2">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
            {user.image ? (
              <img alt="pfp" src={user.image} />
            ) : (
              <UserIcon className="w-8 h-8 text-gray-500" />
            )}
          </div>
        </div>

        {/* right */}
        <div className="p-2 w-full">
          {/* top row */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <h3 className="font-semibold">
                {user?.firstName || userName.fullName}
              </h3>
              <p className="text-sm text-gray-500">{`@${
                user.username || userName.username
              }`}</p>
            </div>

            {/* dots */}
            <div className="mr-2 hover:bg-blue-100 rounded-full cursor-pointer">
              <EllipsisHorizontalIcon className="h-8 w-8 text-gray-700 hover:text-blue-300" />
            </div>
          </div>

          {/* content */}
          <div className="">
            <p>{body}</p>
          </div>
        </div>
      </div>

      {/* icons */}
      <div className="w-full p-2 flex justify-around items-center ">
        <div className="outer__icon-div">
          <div className="div-around-icon">
            <ChatBubbleLeftIcon className="icon__style" />
          </div>
          <p className="icon__text">412</p>
        </div>

        <div className="outer__icon-div">
          <div className="div-around-icon">
            <ArrowPathRoundedSquareIcon className="icon__style" />
          </div>
          <p className="icon__text">2300</p>
        </div>

        <div className="outer__icon-div">
          <div className="div-around-icon">
            <HeartIcon className="icon__style" />
          </div>
          <p className="icon__text">{reactions}</p>
        </div>

        <div className="outer__icon-div">
          <div className="div-around-icon">
            <ChartBarIcon className="icon__style" />
          </div>
          <p className="icon__text">2,4M</p>
        </div>

        <div className="outer__icon-div">
          <div className="div-around-icon">
            <ArrowUpTrayIcon className="icon__style" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
