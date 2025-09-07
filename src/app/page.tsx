import Header from "./components/Header/page";
import Main from "./components/Main/page";

export default function Home() {
  return (
    <div className="bg-white text-black flex flex-col justify-center h-screen px-50">
      <Header
        src="/hamburger.png"
        href="/sections"
        img="/right-arrow.png"
        className="w-5 h-5"
      />
      <Main />
    </div>
  );
}
