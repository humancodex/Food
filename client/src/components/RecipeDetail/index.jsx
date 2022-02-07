import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../redux/actions/index";
import styles from "./RecipeDetail.module.css";
import StarIcon from "@mui/icons-material/Star";
import SpaIcon from "@mui/icons-material/Spa";
import TimerIcon from "@mui/icons-material/Timer";

function RecipeDetail(props) {
	let dispatch = useDispatch();
	let detailId = useSelector((state) => state.detailId);

	useEffect(() => {
		let id = props.match.params.id;

		dispatch(getById(id));
	}, [dispatch, props.match.params.id]);

	return (
		<div className={styles.container}>
			<img className={styles.img} src={detailId.image} alt="" />

			<h1>{detailId.name}</h1>
			<div>
				<ul>
					<li>
						READY IN : {detailId.readyInMinutes} mins
						<TimerIcon sx={{ color: "purple" }} />
					</li>

					<li>
						SCORE: {detailId.score}
						<StarIcon sx={{ color: "yellow" }} />
					</li>

					<li>
						HEALTH LEVEL: {detailId.healthLevel}
						<SpaIcon sx={{ color: "green" }} />
					</li>
				</ul>
			</div>
			<div>
				DIETS:{" "}
				{detailId.diets?.map((d) => (
					<span>{d},</span>
				))}
			</div>
			<p>SUMMARY: {detailId.summary}</p>
		
		</div>
	);
}

export default RecipeDetail;
