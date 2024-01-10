/* eslint-disable array-callback-return */
import React, { useState } from "react";

import { Container, Grid, CardMedia } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import json2mq from "json2mq";

import { ModalWindow } from "./index";

const MediaCard = ({ data }) => {
  const matchesMobile = useMediaQuery(
    json2mq({
      maxWidth: 900,
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
      <Grid item key={el.id} xs={12} sm={6} md={4}>
        <CardMedia
          onClick={handleOpen}
          id={el.id}
          component="img"
          sx={{
            cursor: "pointer",
          }}
          image={el.img}
          alt={`img doesn't download`}
        ></CardMedia>
      </Grid>
    );
  });

  return (
    <>
      <Container>
        <Grid container spacing={4}>
          {cards}
        </Grid>
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
