import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import screenfull from "screenfull";
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // 모바일 웹 주소창 숨기기
    window.addEventListener(
      "load",
      function() {
        // body의 height를 살짝 늘리는 코드
        document.body.style.height =
          document.documentElement.clientHeight + 5 + "px";
        // scroll를 제어하는 코드
        setTimeout(() => window.scrollTo(0, 1), 0);
      },
      false
    );
  }, []);

  const [showPopup, setShowPopup] = useState(true); // 팝업을 보여줄지 여부를 결정하는 state

  const handleConfirm = () => {
    // if (screenfull.isEnabled) {
    //   screenfull
    //     .request()
    //     .then(() => {
    //       setShowPopup(false); // 풀스크린 모드로 전환 후 팝업 숨김
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //       setShowPopup(false); // 에러가 발생하면 팝업을 숨깁니다.
    //     });
    // }
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setShowPopup(false);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const location = useLocation();

  useEffect(() => {
    // 현재 URL이 '/chat'인지 확인
    if (location.pathname !== "/chat") {
      // '/chat'이 아닐 경우, overflow: hidden을 적용
      document.documentElement.classList.add("overflowHidden");
      document.querySelector(".App").classList.add("overflowHidden");
    } else {
      // '/chat'일 경우, overflow: hidden을 제거
      document.documentElement.classList.add("overflowHidden");
      document.querySelector(".App").classList.add("overflowHidden");
      // document.documentElement.classList.remove("overflowHidden");
      // document.querySelector(".App").classList.remove("overflowHidden");
    }

    // 컴포넌트가 unmount 될 때 overflow: hidden을 제거하도록 설정
    return () => {
      document.documentElement.classList.remove("overflowHidden");
      document.querySelector(".App").classList.remove("overflowHidden");
    };
  }, [location]);

  return (
    <div className="relative min-h-screen flex justify-center z-10">
      <div className="App">
        <Outlet />
      </div>
      {showPopup && location.pathname === "/" && (
        <div className="z-9999 p-6 bg-white rounded-lg shadow-xl absolute flex justify-center flex-wrap top-[18%]">
          <p className="text-lg mb-4 text-center w-full">
            풀스크린 모드로 전환하시겠습니까?
          </p>
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
          >
            확인
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
