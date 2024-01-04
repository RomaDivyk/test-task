/* eslint-disable array-callback-return */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 400,
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MediaCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const [modalObj, setModalObj] = useState({
    id: null,
    img: "",
    comment: "",
  });

  const handleOpen = (e) => {
    setId(e.target.id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const result = data.map((el) => {
    return (
      <CardMedia
        onClick={handleOpen}
        key={el.id}
        id={el.id}
        sx={{ height: 300, width: 300, margin: 2 }}
        image={el.img}
        alt={`img doesn't download`}
      ></CardMedia>
    );
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
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {result}
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {" "}
          <CardMedia
            image={modalObj.img}
            alt="empty"
            sx={{ height: 300, width: 300 }}
            component="div"
          />
        </Box>
      </Modal>
    </>
  );
};

export default MediaCard;
