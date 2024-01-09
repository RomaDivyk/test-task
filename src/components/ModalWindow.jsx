/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Modal, Box, CardMedia } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { sendData } from "../api";

const ModalWindow = ({ data, open, onClose, id, matchesMobile }) => {
  const [modalObj, setModalObj] = useState({
    id: null,
    img: "",
    comments: "",
  });
  const [inputData, setInputData] = useState({
    name: "",
    comment: "",
  });

  const style = {
    display: "flex",
    flexDirection: `${matchesMobile ? "column" : "row"}`,
    justifyContent: "space-between",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "70%",
    width: "70%",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  if (id !== null) {
    const modalResult = data.filter((el) => {
      return el.id === id;
    });

    modalObj.id = modalResult[0].id;
    modalObj.img = modalResult[0].img;
    modalObj.comments = modalResult[0].comments.map((comment, idx) => {
      return <p key={idx}>{comment}</p>;
    });
  }

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <CardMedia
              image={modalObj.img}
              alt="empty"
              sx={{
                height: `${matchesMobile ? "300px" : "60%"}`,
                width: "100%",
                marginBottom: 3,
              }}
              component="div"
            />
            {
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <TextField
                  onChange={(e) =>
                    setInputData({ ...inputData, name: e.target.value })
                  }
                  id="outlined-basic-name"
                  label="Name"
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  onChange={(e) =>
                    setInputData({ ...inputData, comment: e.target.value })
                  }
                  id="outlined-basic-comment"
                  label="Comment"
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" onClick={() => sendData(inputData)}>
                  Leave a comment{" "}
                </Button>
              </Box>
            }
          </Box>
          <Box
            sx={{
              height: "60%",
              width: "100%",
              fontSize: `${matchesMobile ? "16px" : "34px"}`,
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {modalObj.comments}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalWindow;
