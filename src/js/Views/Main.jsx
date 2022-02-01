import React from "react";
import Title from "../component/Title/Title.jsx";
import BackGround from "../component/BackGround/BackGround.jsx";
import Table from "../component/Gametable/GameTable.jsx";
import Choose from "../component/Choose/Choose.jsx";

const Home = () => {
	return (
		<>
			<BackGround />
			<Title />
			<Choose />
			<Table />
		</>
	);
};

export default Home;
