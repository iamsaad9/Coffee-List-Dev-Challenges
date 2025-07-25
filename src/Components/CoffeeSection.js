import React, { useState, useEffect } from "react";
import CoffeeCard from "./CoffeeCard";
function CoffeeSection() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data: ", data); // ✅ This will log actual data
        setCoffeeData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    console.log("Updated state: ", coffeeData);
  }, [coffeeData]);

  const filteredData = coffeeData.filter((item) => {
    if (activeButton === 1) return true; // All products
    return item.available === true; // Only available
  });

  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  }

  const width = useWindowWidth();

  const gridCols =
    width > 1000
      ? "repeat(3, 1fr)"
      : width > 700
      ? "repeat(2, 1fr)"
      : "repeat(1, 1fr)";

  const Containerpadding =
    width > 1500 ? "6rem 10rem" : width > 1024 ? "8rem 6rem" : "4rem 2rem";

  const paraWidth = width > 1500 ? "50%" : width > 1024 ? "70%" : "90%";
  return (
    <div
      style={{
        width: "80%",
        margin: "5rem auto",
        marginTop: width > 640 ? "15rem" : "5rem",
        backgroundColor: "#1B1D1F",
        borderRadius: "15px",
        padding: Containerpadding,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src="/resources/vector.svg"
          alt="Vector"
          style={{
            position: "absolute",
            marginLeft: width > 700 ? "15rem" : "",
          }}
        />

        <h1
          style={{
            color: "#FEF7EE",
            fontSize: "2.2rem",
            lineHeight: "0px",
            zIndex: 20,
          }}
        >
          Our Collection
        </h1>
        <p
          style={{
            color: "#6F757C",
            fontSize: "1rem",
            width: paraWidth,
            textAlign: "center",
            zIndex: 20,
          }}
        >
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
      </div>

      <div style={{ display: "flex", gap: "5px", margin: "2rem 0rem" }}>
        <span
          style={{
            padding: "8px 10px",
            backgroundColor: activeButton == 1 ? "#4D5562" : "transparent",
            borderRadius: "8px",
            fontWeight: "bold",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setActiveButton(1)}
        >
          All Products
        </span>
        <span
          style={{
            padding: "8px 10px",
            backgroundColor: activeButton == 2 ? "#4D5562" : "transparent",
            borderRadius: "8px",
            fontWeight: "bold",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setActiveButton(2)}
        >
          Available Now
        </span>
      </div>

      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: gridCols,
          gap: "3rem",
        }}
      >
        {filteredData.map((data) => (
          <CoffeeCard
            key={data.id}
            title={data.name}
            image={data.image}
            price={data.price}
            rating={data.rating}
            votes={data.votes}
            soldOut={data.available}
          />
        ))}
      </div>
    </div>
  );
}

export default CoffeeSection;
