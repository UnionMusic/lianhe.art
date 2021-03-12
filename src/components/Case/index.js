import song from "../../assets/images/song.jpg";

const Case = () => {
  return <div
    style={{
      display: "flex",
      background: "linear-gradient(180deg, #006FFF 0%,#00286E 90%)",
      alignItems: "center",
      height:"800px",
      padding:"0 60px"
    }}
  >
    <div style={{margin:"40px"}}>
      <img src={song} style={{ width: "600px" }} />
    </div>
    <div style={{ width: "800px" }}>
      <div style={{ display: "flex", justifyContent: "space-between",marginBottom:"3rem" }}>
        <div>
          <p style={{ fontSize: "30px", color: "#b3d9ff", margin: 0 }}>全网热议</p>
          <p style={{ color: "#b3d9ff" }}>HOT DISCUSSION ON THE WHOLE NETWORK</p>
          <p style={{ fontSize: "80px", color: "#b3d9ff", margin: 0 }}>1.1亿</p>
        </div>
        <div style={{ margin: "0 40px" }}>
          <p style={{ fontSize: "30px", color: "#b3d9ff", margin: 0 }}>视频使用量</p>
          <p style={{ color: "#b3d9ff" }}>HOT DISCUSSION ON THE WHOLE NETWORK</p>
          <p style={{ fontSize: "80px", color: "#b3d9ff", margin: 0 }}>21亿</p>
        </div>
        <div>
          <p style={{ fontSize: "30px", color: "#b3d9ff", margin: 0 }}>全网话题</p>
          <p style={{ color: "#b3d9ff" }}>HOT DISCUSSION ON THE WHOLE NETWORK</p>
          <p style={{ fontSize: "80px", color: "#b3d9ff", margin: 0 }}>2.8亿</p>
        </div>
      </div>
      <div style={{marginBottom:"80px"}}>
        <p style={{ fontSize: "30px", color: "#b3d9ff" }}>
          联合互娱打造的《游山恋》自发行日起，常居QQ音乐流行指数榜、热歌榜、抖音排行榜、听歌识曲榜、K歌金曲榜、网络歌曲排行榜、国风热歌榜与飙升榜。
        </p>
        <p style={{ fontSize: "30px", color: "#b3d9ff" }}>且收听人数高达几百万，成了当下必不可少的热门歌曲。</p>
      </div>
      <div style={{width: "100%",
        height: "1px",
        borderTop: "solid #6d8196 40px"}} />
    </div>
  </div>
}

export default Case
