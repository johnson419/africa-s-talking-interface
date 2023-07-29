import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        username={'adam'} // adam
        secret={'pass1234'} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
