// cmd/b
import React, { useState , useEffect} from "react";
import {
  LandContainer,
  LandBg,
  VideoBg,
  ContentLand,
  LandH1,
  LandP,
  LandBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./LandElements";
import { Button } from "../ButtonElement";
import Video from "../../videos/video.mp4";
import { getRecipes } from "../../redux/actions/index";
import {useDispatch } from "react-redux"; 

function LandSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
const dispatch = useDispatch();
  	useEffect(() => {
			dispatch(getRecipes());
		}, [dispatch]);

  return (
    <LandContainer>
      <LandBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </LandBg>
      <ContentLand>
        <LandH1>Healthy Recipes Made Easy</LandH1>
        <LandP>Create your favorite recipes and search for new ones</LandP>

        <LandBtnWrapper>
          <Button
            to="/home"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Discover {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </LandBtnWrapper>
      </ContentLand>
    </LandContainer>
  );
}

export default LandSection;
