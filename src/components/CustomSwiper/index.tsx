import Flicking from "@egjs/preact-flicking";
import { Fade } from "@egjs/flicking-plugins";
import Case from "../Case";
import { h } from 'preact'

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
      threshold={40}
      duration={500}
      defaultIndex={0}
      inputType={["touch", "mouse"]}
      bounce={0}
      autoResize={true}
      adaptive={true}
      zIndex={1000}
      bound={true}
      panelEffect = {x => 1 - Math.pow(1 - x, 3)}
      overflow={false}
      hanger={"50%"}
      anchor={"50%"}
      gap={60}
      moveType={{ type: "snap", count: 1 }}
      plugins={[new Fade("",.6)]}
    >
      {["","",""].map((item,index)=>{ return <Case key={index}/>})}
    </Flicking>
  );
};

export default CustomSwiper;
