import { h } from "preact";
import style from "./style.module.scss";

const Container = (props: { children: any }) => {
  const { children } = props;
  return <div class={style.container}>{children}</div>;
};

export default Container;
