import React from "react";
import styled from "styled-components";

let styleAtag = {
  color: "#81a4ae",
  textDecoration: "none",
};

export default function Pharmacy() {
  return (
    <div>
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
    </div>
  );
}
