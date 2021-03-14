import { h } from "preact";
import song from "../../assets/images/song.jpg";

const Case = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "linear-gradient(180deg, #006FFF 0%,#00286E 90%)",
        alignItems: "center",
        width:"1000px",
        padding:"4em"
      }}
    >
      <div style={{marginRight:"2em"}}>
        <img src={song}/>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between"}}>
          <div>
            <p style={{ fontSize: "2.5rem", color: "#b3d9ff", margin: 0 }}>全网热议</p>
            <p style={{ color: "#b3d9ff" }}>HOT DISCUSSION ON THE WHOLE NETWORK</p>
            <p style={{ fontSize: "6rem", color: "#b3d9ff", margin: 0 }}>1.1亿</p>
          </div>
          <div>
            <p style={{ fontSize: "2.5rem", color: "#b3d9ff", margin: 0 }}>视频使用量</p>
            <p style={{ color: "#b3d9ff" }}>HOT DISCUSSION ON THE WHOLE NETWORK</p>
            <p style={{ fontSize: "6rem", color: "#b3d9ff", margin: 0 }}>21亿</p>
          </div>
          <div>
            <p style={{ fontSize: "2.5rem", color: "#b3d9ff", margin: 0 }}>全网话题</p>
            <p style={{ color: "#b3d9ff" }}>HOT DISCUSSION ON THE WHOLE NETWORK</p>
            <p style={{ fontSize: "6rem", color: "#b3d9ff", margin: 0 }}>2.8亿</p>
          </div>
        </div>
        <div>
          <p style={{ fontSize: "2rem", color: "#b3d9ff" }}>
            联合互娱打造的《游山恋》自发行日起，常居QQ音乐流行指数榜、热歌榜、抖音排行榜、听歌识曲榜、K歌金曲榜、网络歌曲排行榜、国风热歌榜与飙升榜。
          </p>
          <p style={{ fontSize: "2rem", color: "#b3d9ff" }}>且收听人数高达几百万，成了当下必不可少的热门歌曲。</p>
        </div>
        <div style={{ height: "1px", borderTop: "solid #6d8196 2em" }} />
      </div>
    </div>
  );
};

export default Case;
