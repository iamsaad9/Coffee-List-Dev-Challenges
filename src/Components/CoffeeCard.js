import React from "react";

function CoffeeCard({ title, price, popular, rating, votes, image, soldOut }) {
  return (
    <div
      style={{
        maxWidth: "25srem",
        display: "flex",
        flexDirection: "column",

        fontFamily: "sans-serif",
      }}
    >
      <div style={{ width: "100%", borderRadius: "15px", overflow: "hidden" }}>
        <img
          src={image}
          alt="Cappuccino"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "16px 0px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "white",
          }}
        >
          <span>{title}</span>
          <span
            style={{
              padding: "3px 6px",
              borderRadius: "4px",
              backgroundColor: "#BEE3CC",
              color: "black",
              fontSize: "1rem",
            }}
          >
            {price}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
            fontSize: "1rem",
            color: "#4D5562",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span>⭐</span>
            <span
              style={{ color: "white", fontWeight: "bold", fontSize: "1.1rem" }}
            >
              {" "}
              {rating || 0}
            </span>

            <span>({votes})</span>
          </div>

          {!soldOut && <span style={{ color: "red" }}>Sold Out</span>}
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
