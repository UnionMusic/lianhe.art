import "./style.css";

const CustomSwiper = () => {
  return (
    <div>
      <div class="bannerBox">
        <div class="banner">
          <ul>
            <li> <div
              style={{
                display: "flex",
                width: "1600px",
                height: "720px",
                background: "linear-gradient(180deg, #006FFF 0%,#00286E 90%)",
                padding: "40px",
                justifyContent: "center",
              }}
            >
              <div style={{ maxWidth: "200px" }}>
                <p>游山恋</p>
                <p>海伦</p>
                <p style={{ lineHeight: "20px" }}>
                  联合互娱打造的《游山恋》自发行日起，常居QQ音乐流行指数榜、热歌榜、抖音排行榜、听歌识曲榜、K歌金曲榜、网络歌曲排行榜、国风热歌榜与飙升榜。
                </p>
                <p>且收听人数高达几百万，成了当下必不可少的热门歌曲。</p>
              </div>
            </div></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomSwiper;
