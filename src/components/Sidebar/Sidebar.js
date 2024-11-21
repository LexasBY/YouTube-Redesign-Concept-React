import React from "react";
import SitebarHeader from './SidebarHeader/SidebarHeader'
import VideoCard from "./VideoCard/VideoCard";
import "./Sidebar.css";
import videoCard_1 from "../../assets/imgs/videoCard_1.jpg";
import videoCard_2 from "../../assets/imgs/videoCard_2.jpg";
import videoCard_3 from "../../assets/imgs/videoCard_3.jpg";
import videoCard_4 from "../../assets/imgs/videoCard_4.jpg";

function Sidebar() {
  const videos = [
    {
      thumbnail: videoCard_1,
      duration: "8:00",
      title: "Baby Monitor Technology",
      views: "123k views",
      category: "Dollie Blair",
    },
    {
      thumbnail: videoCard_2,
      duration: "8:00",
      title: "A Good Autoresponder",
      views: "123k views",
      category: "Dollie Blair",
    },
    {
      thumbnail: videoCard_3,
      duration: "8:00",
      title: "Selecting The Right Hotel",
      views: "123k views",
      category: "Dollie Blair",
    },
    {
      thumbnail: videoCard_4,
      duration: "8:00",
      title: "A Good Autoresponder",
      views: "123k views",
      category: "Dollie Blair",
    },
    {
      thumbnail: videoCard_1,
      duration: "8:00",
      title: "A Good Autoresponder",
      views: "123k views",
      category: "Dollie Blair",
    },
  ];

  return (
    <div className="sidebar">
      <SitebarHeader />
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
}

export default Sidebar;
