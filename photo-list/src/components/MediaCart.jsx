/* eslint-disable array-callback-return */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ModalWindow from "./ModalWindow";

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

const MediaCard = ({ data }) => {
  /*   const theme = useTheme();
  const matchesSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMedium = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesXlarge = useMediaQuery(theme.breakpoints.up("xl")); */

  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const handleOpen = (e) => {
    setId(e.target.id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const cards = data.map((el) => {
    return (
      <CardMedia
        onClick={handleOpen}
        key={el.id}
        id={el.id}
        sx={{
          height: 300,
          width: "30%",
          margin: 2,
          objectFit: "cover",
        }}
        image={el.img}
        alt={`img doesn't download`}
      ></CardMedia>
    );
  });

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
        {cards}
      </Card>

      <ModalWindow data={data} open={open} onClose={handleClose} id={id} />
    </>
  );
};

export default MediaCard;
