import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router"
import { client } from "../lib/client"

export const TwitterContext = createContext();

export const TwitterProvider = ({ children }) => {
	const [appStatus, setAppStatus] = useState("loading");
	const [currentAccount, setCurrentAccount] = useState("");

	const router = useRouter()

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	const checkIfWalletIsConnected = async () => {
		if (!window.ethereum) return setAppStatus('noMetaMask');
		try {
			const addressArray = await window.ethereum.request({
				method: "eth_accounts",
			});
			if (addressArray.length > 0) {
				setAppStatus("connected");
				setCurrentAccount(addressArray[0]);
				createUserAccount(addressArray[0])
			} else {
				router.push("/")
				setAppStatus("notConnected");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const connectTowallet = async () => {
		if (!window.ethereum) return setAppStatus('noMetaMask');
		try {
			setAppStatus('loading')

			const addressArray = await window.ethereum.request({
				method: 'eth_requestAccounts'
			})

			if(addressArray.length > 0){
				setCurrentAccount(addressArray[0])
				setAppStatus('connected')
				createUserAccount(addressArray[0])
			} else {
				// router.push("/");
				setAppStatus("notConnected")
			}
		} catch(error){
			setAppStatus('error')
		}
	};

	const createUserAccount = async (userWalletAddress = currentAccount) => {
		if(!window.ethereum) return setAppStatus('noMetaMask')
		try {
			const user = {
				_type: 'users',
				_id: userWalletAddress,
				name: 'Unnamed',
				isProfileImageNft: false,
				profileImage: 'https://images.pexels.com/photos/2872667/pexels-photo-2872667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
				walletAddress: userWalletAddress
			}

			await client.createIfNotExists(userDoc)
		} catch(error){
			router.push("/");
			setAppStatus('error')
		}
	}
	return <TwitterContext.Provider value={{appStatus, currentAccount, connectTowallet}}>{children}</TwitterContext.Provider>;
};
