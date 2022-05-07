import Post from "../Post";

const style = {
	wrapper: `no-scrollbar`,
	header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
	headerTitle: `text-xl font-bold`,
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

const ProfileTweets = () => {
	return (
		<div className={style.wrapper}>
			{tweets?.map((tweet, index) => (
				<Post
					key={index}
					displayName={tweet.displayName}
					userName={`${tweet.username.slice(0, 4)}...${tweet.username.slice(
						-4
					)}`}
					text={tweet.text}
					avatar={tweet.avatar}
					isProfileImageNft={tweet.isProfileImageNft}
					timestamp={tweet.timestamp}
				/>
			))}
		</div>
	);
};

export default ProfileTweets;
