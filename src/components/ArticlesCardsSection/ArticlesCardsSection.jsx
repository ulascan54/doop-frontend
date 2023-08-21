import React from "react"
import ArticlesCard from "../ArticlesCard/ArticlesCard"
import { Grid } from "@mui/material"

function ArticlesCardsSection() {
  return (
    <div className="md:w-[80%] flex justify-center items-center m-auto relative top-6 py-20">
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
  )
}

export default ArticlesCardsSection
