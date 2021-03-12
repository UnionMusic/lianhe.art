import Header from "./Header";
import Container from "./Container";
import "../style/index.css";
import CustomSwiper from "./CustomSwiper";
import style from "./Footer/style.css";
import { Link } from "preact-router/match";
import Footer from "./Footer";

import line from "../assets/images/line.png";
import ball from "../assets/images/ball.png";

const App = () => (
  <div id="app">
    <Header />
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "100px",
          marginBottom: "200px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <div
            style={{
              padding: "0",
              margin: "0",
              fontSize: "120px",
              fontWeight: "600",
              color: "#FFFFFF",
            }}
          >
            数字版权管理平台
          </div>
          <div style={{ fontSize: "30px", fontWeight: "100", color: "#ffffff" }}>
            提供企业/个人一站式版权管理｜发行｜结算服务
          </div>
          <div
            style={{
              marginTop: "60px",
              fontWeight: "600",
              fontStyle: "italic",
              fontSize: "30px",
              color: "#FFFFFF",
            }}
          >
            Provide enterprise / individual one-stop service
          </div>
          <div
            style={{
              fontWeight: "200",
              fontSize: "30px",
              fontStyle: "italic",
              color: "#FFFFFF",
            }}
          >
            Copyright global distribution settlement management service
          </div>
        </div>
        <div>
          <img src={ball} style={{ height: "900px" }} />
        </div>
      </div>
    </Container>
    <div class="can_do" style={{ fontSize: "80px", marginTop: "200px", marginBottom: "80px" }}>
      WHAT WE CAN DO
    </div>
    <Container>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <img src={line} style={{ height: "1000px" }} />
        </div>
        <div style={{ width: "50%", fontSize: "40px" }}>
          <h2 style={{ color: "#A7DAFF", marginBottom: "60px" }}>数字版权管理</h2>
          <p style={{ color: "#A7DAFF", fontSize: "26px", fontWeight: "200" }}>
            音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量评论量、粉丝数据的增幅情况、以及音乐上榜单监控并
            推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制品「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
          </p>
          <h2 style={{ color: "#A7DAFF", marginBottom: "60px" }}>音乐发行与版权收益</h2>
          <p style={{ color: "#A7DAFF", fontSize: "26px", fontWeight: "200" }}>
            音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量评论量、粉丝数据的增幅情况、以及音乐上榜单监控并
            推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制品「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
          </p>
        </div>
      </div>
    </Container>
    <Container>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "400px" }}>
        <h2
          style={{
            padding: "0",
            margin: "0",
            letterSpacing: "2px",
            fontSize: "80px",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#A7DAFF",
          }}
        >
          CASE PERSENTATION
        </h2>
      </div>
    </Container>
    <CustomSwiper />
    <Container>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "400px" }}>
        <div class={style.choose_title_1}>CHOOSE US</div>
        <div class={style.choose_title_2}>NEW DIGITAL RIGHTS MANMGEMENT</div>
        <div style={{ width: "460px" }}>
          <div style={{ color: "#b3d9ff", fontSize: "24px" }}>
            全新数字版权管理平台，为你提供数字监控平台出品以及版税收益等一切服务
          </div>
          <div style={{ color: "#b3d9ff", fontSize: "24px", marginBottom: "6rem", marginTop: "2rem" }}>
            是一家服务|个人|数据为一体的平台
          </div>
        </div>

        <Link class={style.join_button} href="/">
          立刻加入
        </Link>
      </div>
    </Container>
    <Footer />
  </div>
);

export default App;
