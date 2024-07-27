import React from "react";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { BiArchiveIn } from "react-icons/bi";
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailUnread,
  MdOutlineReport,
  MdOutlineWatchLater,
} from "react-icons/md";
const createMap = [
  {
    name: BiArchiveIn,
    size: "20px",
  },
  {
    name: MdOutlineReport,
    size: "20px",
  },
  {
    name: MdDeleteOutline,
    size: "20px",
  },
  {
    name: MdOutlineMarkEmailUnread,
    size: "20px",
  },
  {
    name: MdOutlineWatchLater,
    size: "20px",
  },
  {
    name: MdOutlineDriveFileMove,
    size: "20px",
  },
  {
    name: IoMdMore,
    size: "20px",
  },
];
const Mail = () => {
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div onClick={()=>navigate("/")} className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <IoMdArrowBack size={"20px"} />
          </div>
          {createMap.map((item) => {
            return (
              <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
                {<item.name size={item.size} />}
              </div>
            );
          })}
        </div>

      </div>
      <div className="flex items-center gap-2">
        <span>1 to 50</span>
        <MdKeyboardArrowLeft size="25px"></MdKeyboardArrowLeft>
        <MdKeyboardArrowRight size="25px"></MdKeyboardArrowRight>
      </div>
    </div>
  
  );
};

export default Mail;
