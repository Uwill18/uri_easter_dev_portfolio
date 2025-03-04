import { useEffect } from "react";
import Image from "next/image";
import ChatBot from "../../public/chatbot2.png"; // Update to your image path

const ChatBotComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.async = true;

    script.onload = () => {
      window.voiceflow?.chat?.load({
        verify: { projectID: "67ad9ba8c5c0f82b3262f23a" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
      });
    };

    document.body.appendChild(script);
  }, []);

  const openChatbot = () => {
    window.voiceflow?.chat?.open(); // Opens the chatbot on click
  };

  return (
    <div onClick={openChatbot} style={{ cursor: "pointer", display: "inline-block" }}>
      <Image src={ChatBot} alt="Virtual Assistant" height={48} width={48} />
    </div>
  );
};

export default ChatBotComponent;
