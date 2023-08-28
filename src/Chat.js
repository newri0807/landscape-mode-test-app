/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate, Link } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function Chat() {
  const navigate = useNavigate();

  const steps = [
    {
      id: "0",
      message: "What is your name?",
      trigger: "1",
    },
    {
      id: "1",
      user: true,
      trigger: "2",
    },
    {
      id: "2",
      message: "Hi {previousValue}, nice to meet you!",
      trigger: "3",
    },
    {
      id: "3",
      options: [{ value: 1, label: "시작하기", trigger: "4" }],
    },
    {
      id: "4",
      message: `블로그와 앱이 연동 되었는지 확인해주시고 연결을 해주세요.`,
      trigger: "5",
    },
    {
      id: "5",
      // component: (
      //   <div className="flex w-full gap-2 justify-center">
      //     <Link
      //       to="/"
      //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded"
      //     >
      //       돌아가기
      //     </Link>
      //     <button
      //       onClick={handleConnectClick}
      //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded"
      //     >
      //       연결하기
      //     </button>
      //   </div>
      // ),
      options: [
        { value: 1, label: "연결하기", trigger: () => handleConnectClick() },
        { value: 2, label: "이동하기", trigger: "6" },
      ],
    },
    {
      id: "6",
      component: <div>이동</div>,
    },
  ];

  const handleConnectClick = () => {
    navigate("/");
  };

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#EF6C00",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#F29F05",
    botFontColor: "#FFF",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  return (
    <header className="App-header">
      Chat
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          hideHeader={true}
          placeholder={"입력해주세요"}
          className="text-black"
        />
      </ThemeProvider>
    </header>
  );
}

export default Chat;
