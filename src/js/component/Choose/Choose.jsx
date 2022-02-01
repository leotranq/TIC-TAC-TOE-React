import React from "react";
import "../Choose/Choose.css";

const Choose = () => {
	return (
		<div className="Body">
			<div>
				<img
					className="CBackground"
					src="https://wallup.net/wp-content/uploads/2017/05/30/443761-women-cyberpunk.jpg"
				/>
				<div className="CBoard">
					<h1>Choose and Shoot</h1>
					<button className="x">
						x
						<input type="text" className="Player1" />
					</button>
					<button className="o">
						o
						<input type="text" className="Player2" />
					</button>
				</div>
			</div>
		</div>
	);
};
export default Choose;
