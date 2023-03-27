import React from "react";
import { Box, Typography, ImageList, ImageListItem } from "@mui/material";



function Rightbar () {
  return (
    <Box display= {"flex"} flexDirection= {"column"}>
            <Typography mt={4} fontStyle={'bold'}>
                Lastest Photos
            </Typography>
            <ImageList sx={{ width: 300  }} cols={2}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
  );
}

const itemData = [
  {
    img: "https://img.freepik.com/free-photo/colorful-dessert-mochi_1339-5318.jpg?w=996&t=st=1679916435~exp=1679917035~hmac=ad77d989b8efb7008b459cb4ee935e83b193cce7ec90f1777471284d2d0cc626",
    title: "Mochi1",
  },
  {
    img: "https://img.freepik.com/free-photo/colorful-dessert-mochi_1339-5315.jpg?w=996&t=st=1679907946~exp=1679908546~hmac=acc90475951774649e0a2ff9d59cc1699386f595d513548ba56b1f02abe5494d",
    title: "Mochi2",
  },
  {
    img: "https://img.freepik.com/free-photo/colorful-dessert-mochi_1339-5331.jpg?w=996&t=st=1679907984~exp=1679908584~hmac=a3124feadf53fd9144dbd679ce17fd308f7714038e96a8addde78cb5c9d58f84",
    title: "Mochi3",
  },
  {
    img: "https://img.freepik.com/free-photo/black-bean-sweet-dessert-dish_1150-35521.jpg?w=996&t=st=1679908004~exp=1679908604~hmac=a3e9cb1740c9ad74caee28b7221205322e9ae84ece6d860ef8b78d0bf16f7d79",
    title: "Mochi4",
  },
];

export default Rightbar;