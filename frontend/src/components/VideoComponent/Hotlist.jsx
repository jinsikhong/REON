import React from "react";
import Videoitem from "./Videoitem";

const Hotlist = () => {
  // 실질 데이터는 API 완성 후 axios로

  // 테스트 데이터
  let TESTDATA = []
  for (let i = 1; i <= 10; i++){
    TESTDATA.push({
      video_id : i,
      thumbnail_url : "https://i.ytimg.com/vi/PJSH-r7uPfo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCP2xrC0yhdf70ORJ37lHEpZAPWCA",
      author_id : i,
      author : `랄로상-${i}`,
      profile_url : "https://yt3.ggpht.com/ytc/AOPolaQEivCeo8OdmA0NhR3XhlRVybG6CTVeeA4YEL75Ug=s68-c-k-c0x00ffffff-no-rj",
      title : `어쩌라고-${i}`,
      like_cnt : 2400,
      comments_cnt : 20,
      isLike : (i % 2 === 0 ? true : false)
    })
  }

  return (
    <div className="flex flex-col items-center">
      <h3>Monthly TOP10</h3>
      <div className="flex overflow-scroll">
        {TESTDATA.map((item)=>{
          return (
            <Videoitem
              key={item.video_id}
              props={item}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Hotlist;