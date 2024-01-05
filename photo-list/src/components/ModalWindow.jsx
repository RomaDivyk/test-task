import { useState } from "react";
import { Modal, Box, CardMedia } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "50%",
  width: "70%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalWindow = ({ data, open, onClose, id }) => {
  const [modalObj, setModalObj] = useState({
    id: null,
    img: "",
    comment: "",
  });

  if (id !== null) {
    const modalResult = data.filter((el) => {
      return el.id === id;
    });
    modalObj.id = modalResult[0].id;
    modalObj.img = modalResult[0].img;
    modalObj.comment = modalResult[0].comment;
  }

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          {" "}
          <CardMedia
            image={modalObj.img}
            alt="empty"
            sx={{ height: "60%", width: "50%" }}
            component="div"
          />
        </Box>
      </Modal>
    </>
  );
};

export default ModalWindow;
