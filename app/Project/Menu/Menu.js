"use client";
import React, { useState } from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const items = [
  {
    id: 1,
    title: "Personal Portfolio",
    desc: " In this project we can use React Tailwind Material UI React icons and many more it is responsive on every type of screen",
    imageUrl: "/1img.webp",
    category: "REACT",
  },
  {
    id: 2,
    title: "Online Coffee Shop",
    desc: "In this project we can use React Tailwind Material UI React icons React Hook Form  and many more it is responsive on every type of screen",
    imageUrl: "/9img.webp",
    category: "REACT",
  },
  {
    id: 3,
    title: "Shopsy (e-commerace)",
    desc: "In this project we can use React Tailwind React icons and i can use dark and light mode . i can also use swiper and AOS use for animation ",
    imageUrl: "/10img.png",
    category: "REACT",
  },
  {
    id: 4,
    title: "Todo List",
    desc: " In this project we can use React Tailwind React icons and many more. We can Add Remove Edit Mark the todos",
    imageUrl: "/5img.webp",
    category: "REACT",
  },
  {
    id: 5,
    title: "Cards",
    desc: "In this project we can use reactJS framor Motion react icons etc..",
    imageUrl: "/7img.webp",
    category: "REACT",
  },
  {
    id: 6,
    title: "Nike Product Landing Page",
    desc: "In this project we can use HTML/CSS it is Responsive Nike product landing page",
    imageUrl: "/4img.webp",
    category: "HTML/CSS",
  },
  {
    id: 7,
    title: "Landing Page",
    desc: " In this project we can use HTML/CSS it is Responsive landing page",
    imageUrl: "/3img.webp",
    category: "HTML/CSS",
  },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <Stack
        className="flex flex-wrap justify-center gap-2"
        direction="row"
        spacing={1}
      >
        <Button
          data-aos="fade-up"
          data-aos-delay="200"
          onClick={() => setSelectedCategory("All")}
          className="rounded-full px-3"
          variant="outlined"
        >
          All
        </Button>
        <Button
          data-aos="fade-up"
          data-aos-delay="400"
          onClick={() => setSelectedCategory("HTML/CSS")}
          className="rounded-full"
          variant="outlined"
        >
          HTML/css
        </Button>
        <Button
          data-aos="fade-up"
          data-aos-delay="600"
          onClick={() => setSelectedCategory("JAVASCRIPT")}
          className="rounded-full"
          variant="outlined"
        >
          Javascript
        </Button>
        <Button
          data-aos="fade-up"
          data-aos-delay="800"
          onClick={() => setSelectedCategory("REACT")}
          className="rounded-full"
          variant="outlined"
        >
          React
        </Button>
      </Stack>
      <div className="flex flex-wrap gap-5 justify-center p-4 pt-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            duration="400"
            data-aos-delay="1000"
          >
            <Card className="flex flex-row z-10" sx={{ maxWidth: 350 }}>
              <CardActionArea>
                <Image
                  className="item-center z-10 "
                  height={100}
                  width={350}
                  src={item.imageUrl}
                />
                <CardContent>
                  <Typography
                    className="font-bold"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {item.title}
                  </Typography>

                  <Typography variant="body2" className="text-lg">
                    {item.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
