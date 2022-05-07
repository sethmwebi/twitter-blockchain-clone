import { useContext } from "react";
import Image from "next/image";
import { TwitterContext } from "../context/TwitterContext";
import Sidebar from "../components/Sidebar";
import Feed from "../components/home/Feed";
import Widgets from "../components/Widgets";
import metaMaskLogo from "../assets/metamask.png";
import errorImg from "../assets/error.png";

const style = {
  wrapper: `flex justify-center min-h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-3/4 flex justify-between`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
};

export default function Home() {
  const { appStatus, connectToWallet } = useContext(TwitterContext);

  const userLoggedIn = (
    <div className={style.content}>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );

  const noUserFound = (
    <div className={style.loginContainer}>
      <Image src={metaMaskLogo} width={200} height={200} />
      <div
        className={style.walletConnectButton}
        onClick={connectToWallet}
      >
        Connect Wallet
      </div>
      <div className={style.loginContent}>Connect to Metamask.</div>
    </div>
  );

  const error = (
    <div className={style.loginContainer}>
      <Image src={errorImg} width={250} height={250} />
      <div className={style.loginContent}>
        An error occurred. Please try again later or use another browser
      </div>
    </div>
  );

  const loading = (
    <div className={style.loginContainer}>
      <div className={style.loginContent}>Loading...</div>
    </div>
  );

  const noMetaMaskFound = (
    <div className={style.loginContainer}>
      <Image src={metaMaskLogo} height={200} width={200} />
      <div className={style.loginContent}>
        <a
          href="https://metamask.io/download.html"
          rel="noreferrer"
          target="_blank"
        >
          You must install Metamask, a <br /> virtual Ethereum wallet, In your
          browser
        </a>
      </div>
    </div>
  );

  const app = (status = appStatus) => {
    switch (status) {
      case "connected":
        return userLoggedIn;

      case "notConnected":
        return noUserFound;

      case "noMetaMask":
        return noMetaMaskFound;

      case "error":
        return error;

      default:
        return loading;
    }
  };
  return <div className={style.wrapper}>{app(appStatus)}</div>;
}
