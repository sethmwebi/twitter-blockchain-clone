import TweetBox from "./TweetBox";
import Post from "../Post";
import { BsStars } from "react-icons/bs";

const style = {
	wrapper: "flex-[2] border-r border-l border-[#38444d]",
	header:
		"sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center",
	headerTitle: "text-xl font-bold",
};

const tweets = [
	{
		displayName: "jessica",
		username: "0x7d241AF260a1e39a8B0cD8616481b74AD9B90e8F",
		avatar:
			"https://images.pexels.com/photos/10898766/pexels-photo-10898766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		text: "gm",
		isProfileImageNft: false,
		timestamp: "2020-06-01T12:00:00.000Z",
	},
	{
		displayName: "jessica",
		username: "0x7d241AF260a1e39a8B0cD8616481b74AD9B90e8F",
		avatar:
			"https://images.pexels.com/photos/10898766/pexels-photo-10898766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		text: "gm",
		isProfileImageNft: false,
		timestamp: "2020-06-01T12:00:00.000Z",
	},
	{
		displayName: "jessica",
		username: "0x7d241AF260a1e39a8B0cD8616481b74AD9B90e8F",
		avatar:
			"https://images.pexels.com/photos/10898766/pexels-photo-10898766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		text: "gm",
		isProfileImageNft: false,
		timestamp: "2020-06-01T12:00:00.000Z",
	},
	{
		displayName: "jessica",
		username: "0x7d241AF260a1e39a8B0cD8616481b74AD9B90e8F",
		avatar:
			"https://images.pexels.com/photos/10898766/pexels-photo-10898766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		text: "gm",
		isProfileImageNft: false,
		timestamp: "2020-06-01T12:00:00.000Z",
	},
];
const Feed = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.header}>
				<div className={style.headerTitle}>Home</div>
				<BsStars />
			</div>
			<TweetBox />
			{tweets.map((tweet, index) => (
				<Post
					key={index}
					displayName={tweet.displayName}
					userName={`${tweet.username.slice(0,4)}...${tweet.username.slice(-4)}`}
					avatar={tweet.avatar}
					text={tweet.text}
					isProfileImageNft={tweet.isProfileImageNft}
					timestamp={tweet.timestamp}
				/>
			))}
		</div>
	);
};

export default Feed;
