/// check

/* eslint-disable array-callback-return */
import React, { useState } from "react";

import { Container, Grid, CardMedia } from "@mui/material";

import { ModalWindow } from "./index";

import { StyledMediaCart } from "../styled/StyledMediaCart";

const MediaCard = ({ data }) => {
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
        <StyledMediaCart>
          <CardMedia
            onClick={handleOpen}
            id={el.id}
            component="img"
            image={el.img}
            alt={`img doesn't download`}
          ></CardMedia>
        </StyledMediaCart>
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

      <ModalWindow data={data} open={open} onClose={handleClose} id={id} />
    </>
  );
};

export default MediaCard;
