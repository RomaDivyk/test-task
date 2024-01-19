import { useState } from 'react';

import { Container, Grid, CardMedia } from '@mui/material';

import { ModalWindow } from './index';

import { StyledMediaCart } from '../styled/StyledMediaCart';

interface MediaCardProps {
  data: any[];
  isLoading?: boolean;
}

const MediaCard = ({ data }: MediaCardProps) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<string | number | null>(null);

  const handleOpen: React.MouseEventHandler<HTMLImageElement> = (event) => {
    setId((event.target as Element).id);
    setOpen(true);
  };
  const handleClose = (): void => setOpen(false);

  const cards = data.map((element) => (
    <Grid item key={element.id} xs={12} sm={6} md={4}>
      <StyledMediaCart>
        <CardMedia
          onClick={handleOpen}
          id={element.id}
          component="img"
          image={element.img}
          alt={`img doesn't download`}
        ></CardMedia>
      </StyledMediaCart>
    </Grid>
  ));

  return (
    <>
      <Container>
        <Grid container spacing={4}>
          {cards}
        </Grid>
      </Container>

      {<ModalWindow id={id} data={data} open={open} onClose={handleClose} />}
    </>
  );
};

export default MediaCard;
