import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Link } from "@mui/material"

export default function ArticlesCard() {
  return (
    <div className="flex items-center justify-center mb-10 ">
      <Card sx={{ maxWidth: 270 }} className="!shadow-lg">
        <CardMedia
          sx={{ height: 200 }}
          image="https://picsum.photos/200"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions className="!flex !justify-between  !text-sm !w-full">
          <Link size="small" sx={{ textDecoration: "underline" }}>
            Read More
          </Link>
          <span className="!text-small">Author - 23.06.2023</span>
        </CardActions>
      </Card>
    </div>
  )
}
