import React from "react"
import ArticlesCard from "../ArticlesCard/ArticlesCard"
import { Grid } from "@mui/material"

function ArticlesCardsSection() {
  return (
    <div className="bg-[#F5F5F5] pb-10">
      <div className="md:w-[95%] lg:w-[80%] flex justify-center items-center pb-0 m-auto relative top-0 left-2 py-20  bg-[#F5F5F5]">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <ArticlesCard />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default ArticlesCardsSection
