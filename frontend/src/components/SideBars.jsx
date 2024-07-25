import React from "react";
import { LuPencil } from "react-icons/lu";
import {
  MdInbox,
  MdMore,
  MdOutlineDrafts,
  MdOutlineKeyboardArrowDown,
  MdOutlineWatchLater,
} from "react-icons/md";
import { TbSend2 } from 'react-icons/tb';
import { IoMdStar } from 'react-icons/io';
const sidebarItems = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar size={"20px"} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"20px"} />,
    text: "Snoozed",
  },
  {
    icon: <TbSend2 size={"20px"} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={"20px"} />,
    text: "Drafts",
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"20px"} />,
    text: "More",
  },
];
function createSidebarItem(item,index) {
  return (
    <div key={index} className="flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200">
      {item.icon}
      <p>{item.text}</p>
    </div>
  );
}
const SideBars = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-lg">
          <LuPencil size={"25px"}></LuPencil>
          Compose
        </button>
      </div>
      <div className="text-gray-600">{sidebarItems.map(createSidebarItem)}</div>
    </div>
  );
};

export default SideBars;
