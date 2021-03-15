import Header from "./Header";
import { h } from "preact";
import Container from "./Container";
import "../style/index.module.scss";
import CustomSwiper from "./CustomSwiper";
import style from "./Footer/style.module.scss";
import { Link } from "preact-router/match";
import Footer from "./Footer";
import line from "../assets/images/line.png";
import ball from "../assets/images/ball.png";
import { useMediaQuery } from "@improv/preact-responsive";
import { createContext } from "preact";

export const ResponsiveContext = createContext(false);

const App = () => {
  const responsive = useMediaQuery(`(max-width: 1440px)`);
  return (
    <div id="app">
      <ResponsiveContext.Provider value={responsive}>
        <Header />
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "4em",
              marginBottom: "4em",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width:"70%"
              }}
            >
              <div
                style={responsive?{
                  padding: "0",
                  margin: "0",
                  fontSize: "4rem",
                  fontWeight: "600",
                  color: "#FFFFFF",
                }:{padding: "0",
                  margin: "0",
                  fontSize: "6rem",
                  fontWeight: "600",
                  color: "#FFFFFF"}}
              >
                数字版权管理平台
              </div>
              <div style={{ fontSize: "2rem", fontWeight: "100", color: "#ffffff" }}>
                提供企业/个人一站式版权管理｜发行｜结算服务
              </div>
              <div
                style={{
                  marginTop: "2em",
                  fontWeight: "600",
                  fontStyle: "italic",
                  fontSize: "2rem",
                  color: "#FFFFFF",
                }}
              >
                Provide enterprise / individual one-stop service
              </div>
              <div
                style={{
                  fontWeight: "200",
                  fontSize: "2rem",
                  fontStyle: "italic",
                  color: "#FFFFFF",
                }}
              >
                Copyright global distribution settlement management service
              </div>
            </div>
            <div>
              <img src={ball} style={responsive?{maxWidth:"60%",marginLeft:"auto"}:{maxWidth:"60%",marginLeft:"auto"}}/>
            </div>
          </div>
        </Container>
        <div class="can_do">WHAT WE CAN DO</div>
        <Container>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ width:"60%" }}>
              <img src={line} />
            </div>
            <div style={{ width:"50%" }}>
              <h2 style={{color: "#A7DAFF", fontSize: "3.2rem", marginBottom: "1em"}}>数字版权管理</h2>
              <p style={{ color: "#A7DAFF", fontSize: "2rem", fontWeight: "200", marginBottom: "4em" }}>
                音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量评论量、粉丝数据的增幅情况、以及音乐上榜单监控并
                推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制品「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
              </p>
              <h2 style={{ color: "#A7DAFF", fontSize: "3.2rem", marginBottom: "1em" }}>音乐发行与版权收益</h2>
              <p style={{ color: "#A7DAFF", fontSize: "2rem", fontWeight: "200" }}>
                音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量评论量、粉丝数据的增幅情况、以及音乐上榜单监控并
                推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制品「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
              </p>
            </div>
          </div>
        </Container>
        <Container>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20em" }}>
            <h2
              style={{
                letterSpacing: "2px",
                fontSize: "6rem",
                fontWeight: "800",
                textAlign: "center",
                marginBottom: "1em",
                color: "#A7DAFF",
              }}
            >
              CASE PERSENTATION
            </h2>
          </div>
        </Container>
        <div>
          <CustomSwiper />
        </div>
        <Container>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20em" }}>
            <div class={style.choose_title_1}>CHOOSE US</div>
            <div class={style.choose_title_2}>NEW DIGITAL RIGHTS MANMGEMENT</div>
            <div style={{ display:"flex",flexDirection:"column",width:"30%" }}>
              <div style={{ color: "#b3d9ff", fontSize: "2rem" }}>
                全新数字版权管理平台，为你提供数字监控平台出品以及版税收益等一切服务
              </div>
              <div style={{ color: "#b3d9ff", fontSize: "2rem", marginBottom: "6em", marginTop: "2em" }}>
                是一家服务|个人|数据为一体的平台
              </div>
            </div>

            <Link class={style.join_button} href="/">
              立刻加入
            </Link>
          </div>
        </Container>
        <Footer />
      </ResponsiveContext.Provider>
    </div>
  );
};

export default App;
