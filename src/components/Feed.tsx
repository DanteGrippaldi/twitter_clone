import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setPosts, addPost } from "@/features/PostSlice";
import { UserIcon } from "@heroicons/react/24/solid";
import {
  PhotoIcon,
  GifIcon,
  Bars2Icon,
  FaceSmileIcon,
  CalendarDaysIcon,
  MapPinIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import Post from "./Post";
const Feed = () => {
  /* const [posts, setPosts] = useState([]); */
  const [textInput, setTextInput] = useState("");
  const posts = useSelector((state) => state.post.value);

  const dispatch = useDispatch();

  const fetchPosts = async () => {
    const url = "https://dummyjson.com/posts";
    const response = await fetch(url);
    const responseJson = await response.json();
    /* setPosts(responseJson); */

    dispatch(setPosts(responseJson.posts));
  };

  const success = () =>
    toast.success("Your post was successful!", {
      duration: 4000,
      position: "bottom-right",
      style: {
        backgroundColor: "#4267B2",
        color: "white",
      },
    });

  const handlePostSubmit = async () => {
    const url = "https://dummyjson.com/posts/add";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: textInput,
        userId: 8,
      }),
    }).then((res) => res.json());
    console.log(response);
    dispatch(
      addPost({
        body: response.title,
        id: response.id,
        userId: "userX",
      })
    );
    setTextInput("");
    success();
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="w-[600px] h-fit border-r-2 border-gray-100">
      {/* top box */}
      <div className="sticky top-0 bg-white opacity-90">
        <div className="p-5">
          <h4 className="text-xl font-semibold">Home</h4>
        </div>

        <div className="w-full flex items-center justify-around border-b-2 border-gray-100">
          <div className="relative py-5 flex justify-center flex-col items-center hover:bg-gray-100 w-1/2 text-center cursor-pointer">
            <h4 className="font-semibold">For you</h4>
            <div className="absolute bottom-0 w-16 h-[5px] bg-blue-400 rounded-full"></div>
          </div>

          <div className=" py-5 hover:bg-gray-100 w-1/2 text-center cursor-pointer">
            <h4 className="font-semibold text-gray-600">Following</h4>
          </div>
        </div>
      </div>

      {/* post box */}
      <div className="w-full border-b-2 border-gray-100 py-2 px-5">
        {/* icon and input */}
        <div className="flex space-x-2 items-center">
          <div className="p-2 bg-gray-300 rounded-full">
            <UserIcon className="w-8 h-8 text-gray-500" />
          </div>

          <div className="p-2">
            <input
              type="text"
              value={textInput}
              placeholder="What's happening?"
              className="p-2 outline-none placeholder:text-xl"
              onChange={(e) => setTextInput(e.target.value)}
            />
            <div
              className={`${
                textInput ? "flex" : "hidden"
              } space-x-1 text-blue-400 items-center`}
            >
              <GlobeAmericasIcon className="w-4 h-4" />
              <p>anyone can reply</p>
            </div>
          </div>
        </div>

        {/* icons and button */}
        <div className="flex items-center pt-2 justify-between">
          {/* icons */}
          <div className="flex items-center space-x-1 pl-16">
            <div className="icon__div">
              <PhotoIcon className="icon" />
            </div>

            <div className="icon__div">
              <GifIcon className="icon" />
            </div>

            <div className="icon__div hidden md:flex">
              <Bars2Icon className="icon" />
            </div>

            <div className="icon__div">
              <FaceSmileIcon className="icon" />
            </div>

            <div className="icon__div hidden md:flex">
              <CalendarDaysIcon className="icon" />
            </div>

            <div className="icon__div">
              <MapPinIcon className="icon" />
            </div>
          </div>

          {/* button */}
          <div
            onClick={handlePostSubmit}
            className={`py-1 px-5 ${
              textInput ? "bg-blue-400" : "bg-blue-400/50"
            } ${textInput ? "cursor-pointer" : "cursor-none "} rounded-full`}
          >
            <h3 className="text-white font-semibold">Tweet</h3>
          </div>
        </div>
      </div>

      {/* posts */}
      <div className="w-full">
        {posts?.map((post, i) => (
          <div key={i} className="">
            <Post
              body={post.body}
              reactions={post.reactions}
              userId={post.userId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
