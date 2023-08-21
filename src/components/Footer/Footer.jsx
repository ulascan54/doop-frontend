import { Button, Grid, Link, Typography } from "@mui/material"
import BookIcon from "@mui/icons-material/Book"
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
function Footer() {
  return (
    <div>
      <Grid
        className="!bg-[#1B3764] text-white text-center mt-10 md:px-40 !flex !justify-between"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={4} className="!mb-5 md:text-left">
          <div className="flex flex-shrink-0 justify-center md:justify-start  items-center mb-3">
            <div className="w-8 h-8s flex justify-center items-center md:mr-2">
              <BookIcon className=" !h-auto !w-full text-[#FFCA42]" />
            </div>
            <span className="text-white font-bold">PAGES</span>
          </div>

          <div className="flex justify-center  md:justify-start items-center">
            <a
              href="#"
              className="block border border-[#FFCA42] p-2 rounded mr-2"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              className="block border border-[#FFCA42] p-2 rounded mr-2"
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              className="block border border-[#FFCA42] p-2 rounded mr-2"
            >
              <FacebookRoundedIcon />
            </a>
            <a
              href="#"
              className="block border border-[#FFCA42] p-2 rounded mr-2"
            >
              <InstagramIcon />
            </a>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={2} className="!mb-5">
          <Typography className="pb-5 md:text-left" variant="h6">
            Explore
          </Typography>
          <div className="md:text-left">
            <span className="text-[#FFCA42]">⊛</span>
            <Button
              className="pb-5 hover:!text-[#FFCA42] hover:!underline"
              variant="h6"
              gutterBottom
            >
              Home
            </Button>
          </div>
          <div className="md:text-left">
            <span className="text-[#FFCA42]">⊛</span>
            <Button
              className="pb-5 hover:!text-[#FFCA42] hover:!underline"
              variant="h6"
              gutterBottom
            >
              Articles
            </Button>
          </div>
          <div className="md:text-left">
            <span className="text-[#FFCA42]">⊛</span>
            <Button
              className="pb-5 hover:!text-[#FFCA42] hover:!underline"
              variant="h6"
              gutterBottom
            >
              About
            </Button>
          </div>
          <div className="md:text-left">
            <span className="text-[#FFCA42]">⊛</span>
            <Button
              className="pb-5 hover:!text-[#FFCA42] hover:!underline"
              variant="h6"
              gutterBottom
            >
              Contact
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="!mb-5">
          <Typography className="pb-5 md:text-left" variant="h6">
            Utility Pages
          </Typography>
          <div className="md:text-left">
            <span className="text-[#FFCA42]">⊛</span>
            <Button
              className="pb-5 hover:!text-[#FFCA42] hover:!underline"
              variant="h6"
              gutterBottom
            >
              Start Here
            </Button>
          </div>
          <div className="md:text-left">
            <span className="text-[#FFCA42]">⊛</span>
            <Button
              className="pb-5 hover:!text-[#FFCA42] hover:!underline"
              variant="h6"
              gutterBottom
            >
              Style guide
            </Button>
          </div>
          <div className="md:text-left">
            <span className="text-[#FFCA42]">⊛</span>
            <Button
              className="pb-5 hover:!text-[#FFCA42] hover:!underline"
              variant="h6"
              gutterBottom
            >
              404 not found
            </Button>
          </div>
          <div className="md:text-left">
            <span className="text-[#FFCA42]">⊛</span>
            <Button
              className="pb-5 hover:!text-[#FFCA42] hover:!underline"
              variant="h6"
              gutterBottom
            >
              Licenses
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="!mb-5">
          <Typography className="pb-5 md:text-left" variant="h6">
            Keep in Touch
          </Typography>
          <div className="flex w-full lg:flex-row flex-col mb-2 ">
            <div className="sm:w-[20%] md:text-left  mr-4">Adress:</div>
            <div className="sm:w-[80%] md:text-left text-[#B4C7E7]">
              24A Kingston St, Los Vegas NC 28202, USA.
            </div>
          </div>
          <div className="flex w-full lg:flex-row flex-col mb-2 ">
            <div className="sm:w-[20%] md:text-left  mr-4">Mail:</div>
            <div className="sm:w-[80%] md:text-left text-[#B4C7E7]">
              support@doctors.com
            </div>
          </div>
          <div className="flex w-full lg:flex-row flex-col mb-2 ">
            <div className="sm:w-[20%] md:text-left  mr-4">Phone:</div>
            <div className="sm:w-[80%] md:text-left text-[#B4C7E7]">
              (+22) 123 - 4567 - 900
            </div>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <div className="w-full h-[1px] bg-[#B4C7E730] mb-2"></div>
          <Typography variant="body2" component="span" align="center">
            &copy; 2023 Pages. All right reserved.
          </Typography>
          <Typography variant="body2" component="span" align="center">
            {" "}
            Made with love by Me.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
