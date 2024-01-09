/* eslint-disable array-callback-return */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import json2mq from "json2mq";

import { ModalWindow } from "./index";

const MediaCard = ({ data }) => {
  const matchesMobile = useMediaQuery(
    json2mq({
      maxWidth: 400,
    })
  );

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
          cursor: "pointer",
          height: 300,
          width: `${matchesMobile ? "100%" : "30%"}`,
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
      <Container>
        <Card
          sx={{
            display: "flex",
            flexDirection: `${matchesMobile ? "column" : "row"}`,
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {cards}
        </Card>
      </Container>

      <ModalWindow
        data={data}
        open={open}
        onClose={handleClose}
        id={id}
        matchesMobile={matchesMobile}
      />
    </>
  );
};

export default MediaCard;
