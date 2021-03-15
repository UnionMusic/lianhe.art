import { h } from "preact";
import style from "./style.module.scss";
import {useContext} from "preact/hooks";
import {ResponsiveContext} from "../app";

const Container = (props: { children: any }) => {
  const responsive = useContext(ResponsiveContext)
  const { children } = props;
  return <div class={responsive?style.container_1440:style.container}>{children}</div>;
};

export default Container;
