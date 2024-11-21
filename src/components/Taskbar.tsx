"use client";

import { FaSnowflake } from "react-icons/fa";
import { IoVolumeMediumSharp, IoWifi } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { SiDiscord, SiGooglechrome, SiSpotify, SiVisualstudiocode, SiWindows11 } from "react-icons/si";
import { TaskbarIcon } from "./TaskbarIcon";

const Taskbar = () => {
  return (
    <div className="w-screen h-[47px] fixed bottom-0 backdrop-blur-lg backdrop-saturate-200 border-t border-neutral-700/80 bg-black/20 flex justify-between">
      <div className="gap-2 ml-2 flex">
        <button className="duration-300 active:text-neutral-400/80">
          <TaskbarIcon className="flex flex-row items-center text-left gap-2 px-2 py-[1px]">
            <FaSnowflake className="text-sky-400 text-xl"/>

            <div className="flex flex-col text-sm">
              <h1 className="font-semibold translate-y-0.5">
                0°C
              </h1>

              <p className="font-medium text-xs -translate-y-0.5">
                Very Cloudy
              </p>
            </div>
          </TaskbarIcon>
        </button>
      </div>

      <div className="flex flex-row items-center gap-1 text-xl">
        <TaskbarIcon className="p-2">
          <SiWindows11 className="text-sky-400"/>
        </TaskbarIcon>

        <TaskbarIcon className="p-2">
          <SiGooglechrome className="text-yellow-300"/>
        </TaskbarIcon>

        <TaskbarIcon className="p-2">
          <SiDiscord className="text-blue-400"/>
        </TaskbarIcon>

        <TaskbarIcon className="p-2">
          <SiSpotify className="text-green-400"/>
        </TaskbarIcon>
        
        <TaskbarIcon className="p-2">
          <SiVisualstudiocode className="text-blue-700"/>
        </TaskbarIcon>
      </div>

      <div className="flex flex-row items-center mr-2">
        <button className="duration-300 active:text-neutral-400/80 mr-0.5">
          <TaskbarIcon className="px-1.5 py-2">
            <MdOutlineKeyboardArrowUp className="text-xl"/>
          </TaskbarIcon>
        </button>

        <button className="duration-300 active:text-neutral-400/80 mr-1.5">
          <TaskbarIcon className="px-2 py-2.5">
            <SiDiscord/>
          </TaskbarIcon>
        </button>
        

        <button className="text-xs text-center duration-300 active:text-neutral-400/80 mr-0.5">
          <TaskbarIcon className="px-2 py-1">
            <h1>ENG</h1>

            <p>DE</p>
          </TaskbarIcon>

        </button>

        <button className="duration-300 active:text-neutral-400/80 mr-0.5">
          <TaskbarIcon className="px-2 py-3 flex flex-row gap-1">
            <IoWifi/>
            <IoVolumeMediumSharp/>
          </TaskbarIcon>
        </button>

        <button className="text-xs flex flex-col text-right duration-300 active:text-neutral-400/80">
          <TaskbarIcon className="px-3 py-0.5">
            <h1>18:37</h1>

            <p>21/11/2024</p>
          </TaskbarIcon>
        </button>
      </div>
    </div>
  );
};

export default Taskbar; 