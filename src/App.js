import logo from "./logo.svg";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // 모바일 기기에서 페이지 로딩 후 주소창을 숨기기 위해 스크롤
    if (window.innerWidth < 768) {
      window.scrollTo(0, 1);
    }
  }, []);

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="flex justify-center items-center w-full ">
          <div class="w-1/5 h-32 border border-red-500 m-2">1</div>
          <div class="w-1/5 h-32 border border-red-500 m-2">2</div>
          <div
            class="w-1/5 h-32 border border-red-500 m-2 cursor-pointer"
            onClick={() => {
              navigate("/chat");
            }}
          >
            3
          </div>
          <div class="w-1/5 h-32 border border-red-500 m-2">4</div>
          <div class="w-1/5 h-32 border border-red-500 m-2">5</div>
        </div>
      </header>
    </div>
  );
}

export default App;
