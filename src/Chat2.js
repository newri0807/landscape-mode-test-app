/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect, useState, useRef } from "react";
import React from "react";

const Chat2 = () => {
  return (
    <div className="w-full flex justify-center ">
      <iframe
        src={`https://www.vchatcloud.com/chat-demo/iframe/iframe_kakao/v3/index.html?channelKey=${process.env.REACT_APP_CHAT2_KEY}`}
        frameborder="no"
        scrolling="no"
        marginwidth="0"
        marginheight="0"
        width="391"
        height="691"
        className="flex justify-center "
      ></iframe>
    </div>
  );
};

export default Chat2;
