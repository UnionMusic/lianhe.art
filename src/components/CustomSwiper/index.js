import Flicking from "@egjs/preact-flicking";
import { Fade } from "@egjs/flicking-plugins";
import Case from "../Case";

const CustomSwiper = () => {
  return (
    <Flicking
      tag = "div"
      viewportTag = "div"
      cameraTag = "div"
      classPrefix = "eg-flick"
      deceleration={0.0075}
      horizontal={true}
      circular={true}
      infinite={false}
      infiniteThreshold={0}
      lastIndex={Infinity}
      threshold={40}
      duration={500}
      defaultIndex={0}
      inputType={["touch", "mouse"]}
      bounce={0}
      autoResize={false}
      adaptive={false}
      zIndex={100}
      bound={true}
      overflow={false}
      hanger={"50%"}
      anchor={"50%"}
      gap={50}
      moveType={{ type: "snap", count: 1 }}
      plugins={[new Fade("",.6)]}
    >
      <Case />
      <Case />
      <Case />
    </Flicking>
  );
};

export default CustomSwiper;
