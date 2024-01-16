import { useState } from 'react';
import { Modal, Box, CardMedia, TextField, Button, Container, Grid } from '@mui/material';

import { StyledModalWindow, Line, styleModal } from '../styled/StyledModalWindow';

import { sendData } from '../api';

const ModalWindow = ({ id, data, open, onClose }) => {
  const [modalObj, setModalObj] = useState({
    id: null,
    img: '',
    comments: '',
  });
  const [inputData, setInputData] = useState({
    name: '',
    comment: '',
  });

  if (id !== null) {
    const modalResult = data.filter((element) => element.id === id);

    modalObj.id = modalResult[0].id;
    modalObj.img = modalResult[0].img;
    modalObj.comments = modalResult[0].comments.map((comment, index) => <Line key={index}>{comment}</Line>);
  }

  return (
    <StyledModalWindow>
      <Modal open={open} onClose={onClose}>
        <Container sx={styleModal}>
          <Grid container spacing={2}>
            <Grid item xs={10} sm={6.5} md={6} lg={4.5} xl={4} sx={{ maxHeight: '100%' }}>
              <CardMedia image={modalObj.img} alt="empty" component="img" sx={{ maxHeight: '80%', marginBottom: 3 }} />
              <Box>{modalObj.comments}</Box>
            </Grid>

            <Grid item xs={10} sm={6} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: 'auto',
                }}
              >
                <TextField
                  onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                  id="filled-basic-name"
                  label="Name"
                  variant="filled"
                  margin="normal"
                />
                <TextField
                  onChange={(e) => setInputData({ ...inputData, comment: e.target.value })}
                  id="filled-basic-comment"
                  label="Comment"
                  variant="filled"
                  margin="normal"
                />
                <Button variant="contained" onClick={() => sendData(inputData)}>
                  Leave a comment{' '}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </StyledModalWindow>
  );
};

export default ModalWindow;
