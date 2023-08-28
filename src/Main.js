/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import ImageMap from "image-map";
const Main = () => {
  useEffect(() => {
    ImageMap("img[usemap]"); //ImageMap 삽입코드
  }, []);

  const clickHandler = (titile) => {
    alert(titile);
  };
  return (
    <>
      {/* <header className="App-header">
        <div className="flex justify-center items-center w-full ">
          <div className="w-1/5 h-[6.5em] border border-red-500  ml-[38px] cursor-pointer">
            1
          </div>
          <div className="w-1/5 h-[5rem] border border-red-500 m-2 ml-[23px]">
            2
          </div>
          <div
            className="w-1/5 h-[9rem] border border-red-500 m-2 cursor-pointer mr-[48px] mt-[7%]"
            onClick={() => {
              navigate("/chat");
            }}
          >
            3
          </div>
          <div
            className="w-1/5 h-32 border border-red-500 m-2"
            onClick={() => {
              navigate("/chat2");
            }}
          >
            4
          </div>
          <div className="w-1/5 h-32 border border-red-500 m-2">5</div>
        </div>
      </header> */}

      <img src="./img/mainhall.jpg" usemap="#image-map" />

      <map name="image-map">
        <area
          target=""
          alt="블루리본 캠페인"
          title="블루리본 캠페인"
          href=""
          coords="133,331,43,366,40,788,464,673,462,451,428,402"
          shape="poly"
        />
        <area
          target=""
          alt="전립선암 건강강좌"
          title="전립선암 건강강좌"
          href=""
          coords="589,427,545,456,544,668,779,643,781,473,752,443"
          shape="poly"
        />
        <area
          target=""
          alt="질문 게시판"
          title="질문 게시판"
          href=""
          coords="849,398,1071,797"
          shape="rect"
        />
        <area
          target=""
          alt="실시간 QnA"
          title="실시간 QnA"
          href="/chat2"
          coords="1159,448,1132,478,1132,644,1365,675,1363,456,1322,424"
          shape="poly"
        />
        <area
          target=""
          alt="만족도 설문참여"
          title="만족도 설문참여"
          href=""
          coords="1483,405,1444,451,1443,680,1873,788,1856,378,1773,329"
          shape="poly"
        />
      </map>
    </>
  );
};

export default Main;
