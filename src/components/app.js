import Header from "./header";
import Container from "./Container";
import Footer from "./Footer";
import "../style/index.css";
import Particle from "./Particle";

const App = () => (
  <div id="app">
    <Header />
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "200px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            marginTop: "6rem",
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
        <div style={{ width: "40%" }}><Particle /></div>
      </div>
    </Container>
    <Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
          WHAT WE CAN DO
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ minWidth: "40%" }}></div>
          <div style={{ minWidth: "50%", marginTop: "2rem" }}>
            <h2 style={{ color: "#A7DAFF" }}>数字版权管理</h2>
            <p style={{ color: "#A7DAFF", lineHeight: "2em" }}>
              音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量评论量、粉丝数据的增幅情况、以及音乐上榜单监控并
              推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制品「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </Container>
    <Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
          音乐发行与版权收益
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ minWidth: "40%" }}></div>
          <div style={{ minWidth: "50%", marginTop: "2rem" }}>
            <h2 style={{ color: "#A7DAFF" }}>数字版权管理</h2>
            <p style={{ color: "#A7DAFF", lineHeight: "2em" }}>
              音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量评论量、粉丝数据的增幅情况、以及音乐上榜单监控并
              推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制品「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
            </p>
          </div>
        </div>
      </div>
    </Container>
    <Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
          <div></div>
      </div>
    </Container>
    <Footer />
  </div>
);

export default App;
