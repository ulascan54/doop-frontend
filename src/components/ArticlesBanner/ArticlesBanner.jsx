import { Typography } from "@mui/material"
import React from "react"

function ArticlesBanner() {
  return (
    <div className="w-full h-60 md:h-[50vh] lg:h-[70vh]  bg-[#1B3764] text-white flex flex-col items-center justify-center text-center">
      <Typography variant="h3" component="h2" className="!m-4">
        Articles
      </Typography>
      <div className="w-16 h-1  bg-[#FFCA42] "></div>
      <p className="m-4 md:w-4/12">
        There are many variations of passages of Lorem Ipsum available, have
        suffered alteration in some form.
      </p>
    </div>
  )
}

export default ArticlesBanner
