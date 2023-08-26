import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import { useEffect, useState } from "react"
import BookIcon from "@mui/icons-material/Book"

function Login({ isOpen, setIsOpen }) {
  const style = {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    bgcolor: "background.paper",
    display: "flex",
  }
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(isOpen)
  useEffect(() => {
    if (isOpen) handleOpen()
  }, [isOpen])
  const handleClose = () => {
    setIsOpen(false)
    setOpen(false)
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="bg-[#1B3764] w-[50%] hidden md:flex md:justify-center md:items-center flex-col text-white  relative overflow-hidden">
          <div className="absolute w-60 h-96 bg-[#B4C7E7] rounded-full -top-20 -right-10"></div>
          <div className="absolute w-60 h-96 bg-[#B4C7E7] rounded-full -bottom-20 -left-10"></div>
          <div className="absolute w-96 h-60 bg-[#FFCA42] rounded-full -top-20 -left-10"></div>
          <div className="absolute w-96 h-60 bg-[#FFCA42] rounded-full -bottom-20 -right-10"></div>

          <div className="flex  items-center  ">
            <div className="w-14 h-14 flex justify-center items-center">
              <BookIcon className="!h-auto !w-full text-[#FFCA42]" />
            </div>
            <span className="text-white text-4xl  font-bold">PAGES</span>
          </div>
          <div>
            <p className="pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              soluta.
            </p>
          </div>
        </div>

        <div></div>
      </Box>
    </Modal>
  )
}

export default Login
