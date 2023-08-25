import logo from "./logo.svg";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // 모바일 기기에서 페이지 로딩 후 주소창을 숨기기 위해 스크롤
    if (window.innerWidth < 768) {
      window.scrollTo(0, 1);
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="flex justify-center items-center w-full ">
          <div class="w-1/5 h-32 border border-red-500 m-2">1</div>
          <div class="w-1/5 h-32 border border-red-500 m-2">2</div>
          <div class="w-1/5 h-32 border border-red-500 m-2">3</div>
          <div class="w-1/5 h-32 border border-red-500 m-2">4</div>
          <div class="w-1/5 h-32 border border-red-500 m-2">5</div>
        </div>
      </header>
    </div>
  );
}

export default App;
