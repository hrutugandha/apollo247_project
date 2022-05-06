import React from "react";

let styleAtag = {
  color: "#81a4ae",
  textDecoration: "none",
  marginBottom: "0px",
};

// const [
//   COVIDCare,
//   COVIDProtrction,
//   DabetesCare,
//   MindCare,
//   LiverCare,
//   Cardiac,
//   PainRelief,
//   OralCare,
//   Respiratory,
//   ColdAndImmunity,
//   StomachCare,
//   SexualHealth,
//   EyeandEarCare,
//   ElderlyCare,
// ] = [
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
// ];
// console.log(COVIDCare);

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
// const healthConditionsURL = [
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
//   "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
// ];
const obj = {
  COVID_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
  COVID_Protrction:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/coronavirus_protection_1.png",
  Dabetes_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_diabetes.png",
  Mind_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/m/i/mind_care.jpg",
  Liver_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/l/i/liver_care.jpg",
  Cardiac:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_heart.png",
  Pain_Relief:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_arthritis.png",
  Oral_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/o/r/oral_care_2.png",
  Respiratory:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_lungs.png",
  Cold_and_Immunity:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/cold_and_immunity_21oct.png",
  Stomach_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_stomach.png",
  Sexual_Health:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_condom.png",
  Eye_and_Ear_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_eyeear.png",
  Elderly_Care:
    "https://newassets.apollo247.com/pub/media/healtharea/247images/a/d/adult.png",
};

export default function Pharmacy() {
  return (
    <div
      style={{
        fontSize: "14px",
        color: "#02475b",
        backgroundColor: "white",
        width: "1064px",
        margin: "auto",
        marginTop: "90px",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          marginTop: "90px",
          color: "#02475b",
          padding: "0",
          boxSizing: "border-box",
          width: "1064px",
          margin: "auto",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            gap: "20px",
            color: "#02475b",
            fontSize: "12px",
            marginBottom: "0px",
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
        <hr style={{ marginTop: "0px" }} />
        <div style={{ display: "flex" }}>
          <div>
            <div class="MedicineAutoSearch_medicineSearchForm__3fz_N">
              <div class="MuiFormControl-root MuiTextField-root MedicineAutoSearch_searchInput__1kk2n MuiFormControl-fullWidth">
                <div class="MuiInputBase-root MuiInput-root jss9 MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                  <input
                    type="text"
                    aria-invalid="false"
                    autocomplete="off"
                    id="searchProduct"
                    placeholder="Search medicines, brands and more"
                    value=""
                    class="MuiInputBase-input MuiInput-input"
                  ></input>
                </div>
              </div>
              <button class="AphButton_secondaryBtn__1zFnK AphButton_disable__kvKtr">
                <i class="icon-ic-search MedicineAutoSearch_searchIco__2Hi4p"></i>
              </button>
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
        <hr />
        <div>
          <div
            style={{
              display: "inline-flex",
              gap: "20px",
              color: "#02475b",
              fontSize: "12px",
            }}
          >
            {/* {
              (healthConditionsURL.map((url) => {
                healthConditionsFnURL(url);
              }),
              healthConditions.map((condition) =>
                healthConditionsFn(condition)
              )) */}

            {/* {healthConditions.map((condition) => healthConditionsFn(condition))} */}
          </div>
          <div
            style={{
              display: "inline-flex",
              gap: "5px",
              color: "#02475b",
              fontSize: "12px",
              width: "1064px",
            }}
          >
            {Object.keys(obj).map((item, i) => {
              return (
                <>
                  <div
                    style={{
                      boxSizing: "border-box",
                      padding: "5px",
                      outline: "none",
                      maxWidth: "calc(16.6667% - 0px)",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <a
                      href="https://www.apollopharmacy.in/shop-by-health-conditions/respiratory"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        outline: "0",
                        display: "block",
                      }}
                    >
                      <div
                        style={{
                          margin: "0",
                          boxSizing: "border-box",
                          background: "#fff",
                          boxShadow: "0 2px 4px 0 hsla(0,0%,50.2%,.3)",
                          borderRadius: "10px",
                          padding: "14px 7px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={obj[item]}
                          style={{
                            width: "36px",
                            aspectRatio: "auto 36 / 36",
                            height: "36px",
                            margin: "0",
                            padding: "0",
                            boxSizing: "border-box",
                            marginRight: "12px",
                          }}
                        ></img>
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "400",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                            color: "#01475b",
                            overflow: "hidden",
                            width: "80px",
                            justifyContent: "center",
                            textAlign: "left",
                          }}
                        >
                          {healthConditions[i]}
                        </p>
                      </div>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
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
