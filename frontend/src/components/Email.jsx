import React from "react";
import { MdCropSquare } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Email = () => {
    const navigate=useNavigate();
    const openMail=()=>{
        navigate("/mail/1234")
    }
  return (
    <div onClick={openMail} className="flex items-center justify-between border-b border-gray-200 px-4 py-3  hover:cursor-pointer  ">
      <div className="flex items-center gap-2">
        <div>
          <MdCropSquare></MdCropSquare>
        </div>
        <div>
          <MdOutlineStarBorder></MdOutlineStarBorder>
        </div>
        <div>
          <h1>Rachna</h1>
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
          sunt!
        </p>
      </div>
      <div className="flex-none text-gray text-sm">4 days ago</div>
    </div>
  );
};

export default Email;
