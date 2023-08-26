import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import screenfull from "screenfull";
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // 모바일 기기에서 페이지 로딩 후 주소창을 숨기기 위해 스크롤
    if (window.innerWidth < 768) {
      window.scrollTo(0, 1);
    }
  }, []);

  const [showPopup, setShowPopup] = useState(true); // 팝업을 보여줄지 여부를 결정하는 state

  const handleConfirm = () => {
    if (screenfull.isEnabled) {
      screenfull
        .request()
        .then(() => {
          setShowPopup(false); // 풀스크린 모드로 전환 후 팝업 숨김
        })
        .catch((err) => {
          console.error(err);
          setShowPopup(false); // 에러가 발생하면 팝업을 숨깁니다.
        });
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
    <div className="relative min-h-screen flex justify-center ">
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
