import Header from "./header";
import Container from "./Container";
import "../style/index.css";
import graph from "../assets/images/graph.png";
import Particle from "./Particle";
import ParticleTwo from "./ParticleTwo";
import CustomSwiper from "./CustomSwiper";
import style from "./Footer/style.css";
import {Link} from "preact-router/match";
import Footer from "./Footer";

const App = () => (
  <div id="app">
    <Header />
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
            alignItems:"center",
          marginTop: "200px",
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
              fontSize: "4rem",
              fontFamily: "PingFang SC",
              fontWeight: "600",
              color: "#FFFFFF",
            }}
          >
            数字版权管理平台
          </div>
          <div
            style={{
              fontFamily: "PingFang SC",
              fontWeight: "200",
              color: "#FFFFFF",
            }}
          >
            提供企业/个人一站式版权管理｜发行｜结算服务
          </div>
          <div
            style={{
              marginTop: "2rem",
              fontFamily: "SF Pro",
              fontWeight: "600",
              fontStyle: "italic",
              color: "#FFFFFF",
            }}
          >
            Provide enterprise / individual one-stop service
          </div>
          <div
            style={{
              fontFamily: "SF Pro",
              fontWeight: "400",
              fontStyle: "italic",
              color: "#FFFFFF",
            }}
          >
            Copyright global distribution settlement management service
          </div>
        </div>
        <div style={{ width: "40%" }}>
          <Particle />
        </div>
      </div>
    </Container>
    <div class="can_do">
      WHAT WE CAN DO
    </div>
    <Container>
      <div style={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
        <div style={{ width: "40%" }}>
          <ParticleTwo />
        </div>
        <div style={{ width: "50%", marginTop: "2rem" }}>
          <h2 style={{ color: "#A7DAFF" }}>数字版权管理</h2>
          <p style={{ color: "#A7DAFF", lineHeight: "2em" }}>
            音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量评论量、粉丝数据的增幅情况、以及音乐上榜单监控并
            推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制品「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
          </p>
        </div>
      </div>
    </Container>
    <Container>
      <div style={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
        <div style={{ width: "40%" }}><img src={graph} style={{width:"400px"}} /></div>
        <div style={{ width: "50%", marginTop: "2rem" }}>
          <h2 style={{ color: "#A7DAFF" }}>音乐发行与版权收益</h2>
          <p style={{ color: "#A7DAFF", lineHeight: "2em" }}>
            音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量评论量、粉丝数据的增幅情况、以及音乐上榜单监控并
            推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制品「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
          </p>
        </div>
      </div>
    </Container>
    <Container>
      <div style={{ display: "flex", flexDirection: "column",alignItems:"center" }}>
        <div
          style={{
            padding: "0",
            margin: "0",
            fontSize: "2rem",
            fontFamily: "PingFang SC",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#A7DAFF",
          }}
        >
          CASE PERSENTATION
        </div>
        <div><CustomSwiper /></div>
      </div>
    </Container>
      <Container>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"6rem"}}>
              <div class={style.choose_title_1}>CHOOSE US</div>
              <div class={style.choose_title_2}>NEW DIGITAL RIGHTS MANMGEMENT</div>
              <div style={{ color: "#b3d9ff" }}>
                  全新数字版权管理平台，为你提供数字监控平台出品以及版税收益等一切服务
              </div>
              <div style={{ color: "#b3d9ff", marginBottom: "6rem",marginTop:"2rem" }}>
                  是一家服务|个人|数据为一体的平台
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
