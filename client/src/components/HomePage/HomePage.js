import React, { useState } from "react";

// import { Footer } from "./Footer";
// import { IconSection } from "./IconSection";
// import { Header } from "./Header";
import { MediaList } from "../media/MediaList";

export const HomePage = () => {
  const fakevid = [{ _id: 1 }, { _id: 2 }, { _id: 3 }, { _id: 4 }];
  const [media, setMedia] = useState(fakevid);
  return (
    <>
      {/* <Header />
      <IconSection />
      <Footer /> */}
      <h2 className="center-align">Popular Video</h2>
      <MediaList media={media} />
    </>
  );
};
