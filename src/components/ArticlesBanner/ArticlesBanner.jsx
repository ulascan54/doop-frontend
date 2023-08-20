import { Typography } from "@mui/material"
import React from "react"
import bannertest from "../../bannertest.jpg"

function ArticlesBanner() {
  return (
    <div
      className="w-full h-60 md:h-[30vh] lg:h-[60vh]  text-white flex flex-col items-center   justify-center text-center "
      style={{
        background: `url("${bannertest}") no-repeat`,
        backgroundSize: "cover center center",
        backgroundColor: "#1B3764",
      }}
    >
      <div className="w-full h-60 md:h-[30vh] lg:h-[60vh]  text-white flex flex-col items-center bg-[#1B376499] justify-center text-center">
        <Typography variant="h3" component="h2" className="!m-4">
          Articles
        </Typography>
        <div className="w-16 h-1  bg-[#FFCA42] "></div>
        <p className="m-4 md:w-4/12">
          There are many variations of passages of Lorem Ipsum available, have
          suffered alteration in some form.
        </p>
      </div>
    </div>
  )
}

export default ArticlesBanner
