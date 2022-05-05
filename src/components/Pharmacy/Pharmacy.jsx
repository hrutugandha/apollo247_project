import React from "react";
import styled from "styled-components";

let styleAtag = {
  color: "#81a4ae",
  textDecoration: "none",
};

const healthConditions = [
  "COVID Care",
  "COVID Protrction",
  "Dabetes Care",
  "Mind Care",
  "Liver Care",
  "Cardiac",
  "Pain Relief",
  "Oral Care",
  "Respiratory",
  "Cold & Immunity",
  "Stomach Care",
  "Sexual Health",
  "Eye and Ear Care",
  "Elderly Care",
];
const healthConditionsURL = [
  "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
];

export default function Pharmacy() {
  return (
    <div
      style={{
        fontSize: "14px",
        fontFamily: "ibm_plex_sansregular",
        color: "#02475b",
        margin: "0",
        boxSizing: "border-box",
        padding: "90px 0 0",
        marginTop: "0px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          gap: "20px",
          color: "#02475b",
          fontSize: "12px",
        }}
      >
        <a
          style={styleAtag}
          href="https://www.apollopharmacy.in/shop-by-category/baby-care"
        >
          <p>Baby Care</p>
        </a>
        <a
          style={styleAtag}
          href="https://www.apollopharmacy.in/shop-by-category/health-nutrition"
        >
          <p>Health & Nutrition</p>
        </a>
        <a
          style={styleAtag}
          href="https://www.apollopharmacy.in/shop-by-category/personal-care-1"
        >
          <p>Personal Care</p>
        </a>
        <a
          style={styleAtag}
          href="https://www.apollopharmacy.in/shop-by-category/ayurveda"
        >
          <p>Ayurveda</p>
        </a>
        <a
          style={styleAtag}
          href="https://www.apollopharmacy.in/shop-by-category/health-devices"
        >
          <p>Health Devices</p>
        </a>
        <a
          style={styleAtag}
          href="https://www.apollopharmacy.in/shop-by-category/home-essentials"
        >
          <p>Home Essentials</p>
        </a>
        <a
          style={styleAtag}
          href="https://www.apollopharmacy.in/shop-by-category/apollo-products"
        >
          <p>Apollo Life</p>
        </a>
        <a
          style={styleAtag}
          href="https://www.apollopharmacy.in/shop-by-category/otc"
        >
          <p>Health Condition</p>
        </a>
        <a
          style={styleAtag}
          href="https://www.apollopharmacy.in/shop-by-category/covid-essentials"
        >
          <p>Covid Essentials</p>
        </a>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <div>
            <input></input>
          </div>
          <div>
            <img src="https://newassets.apollo247.com/pub/media/magestore/bannerslider/images/w/e/web_circle_pharmacy.jpg"></img>
          </div>
        </div>
        <div>
          <div>
            <img src=""></img>
            <p>Special Offers</p>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <p>Place your order via prescriptions</p>
              <button>UPLOAD</button>
            </div>
            <div>
              <img src="https://newassets.apollo247.com/images/ic_prescription_pad.svg"></img>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "inline-flex",
            gap: "20px",
            color: "#02475b",
            fontSize: "12px",
          }}
        >
          {healthConditionsURL.map((url) => healthConditionsFnURL(url))}
          {healthConditions.map((condition) => healthConditionsFn(condition))}
        </div>
      </div>
    </div>
  );
}

function healthConditionsFn(e) {
  return <div>{e}</div>;
}
function healthConditionsFnURL(e) {
  return <img src={e}></img>;
}
