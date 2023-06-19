import React from "react";
import MaterialTestLab from "../assets/app tab/material_test_labs.svg";
import eBilling from "../assets/app tab/e-billing.svg";
import Auction from "../assets/app tab/auction.svg";
import AutoDcr from "../assets/app tab/Auto DCR.svg";
import ContractRegistration from "../assets/app tab/Contract Registration.svg";
import eMitra from "../assets/app tab/E-mitra.svg";
import Finance from "../assets/app tab/Finance & Accounting.svg";
import Lottery from "../assets/app tab/lottery.svg";
import masterList from "../assets/app tab/master_list.svg";
import Payroll from "../assets/app tab/Payroll.svg";
import RR from "../assets/app tab/rr_billing.svg";

const svg = [
  { id: 1, src: MaterialTestLab, title: "Material Lab" },
  { id: 2, src: eBilling, title: "E-billing" },
  { id: 3, src: Auction, title: "Auction" },
  { id: 4, src: AutoDcr, title: "AutoDcr" },
  { id: 5, src: ContractRegistration, title: "E-billing" },
  { id: 6, src: eMitra, title: "eMitra" },
  { id: 7, src: Finance, title: "Finance" },
  { id: 8, src: Lottery, title: "E-billing" },
  { id: 9, src: masterList, title: "E-billing" },
  { id: 10, src: Payroll, title: "Payroll" },
  { id: 11, src: RR, title: "E-billing" },
];

const Application = () => {
  return (
    <>
      <div className=" ml-[9rem] flex flex-row gap-3 justify-normal items-start m-4">
        {svg.map((item) => (
          <div
            className="h-24 w-24 border-2 rounded-2xl flex flex-col justify-center items-center bg-slate-50 "
            key={item.id}
          >
            <img src={item.src} className="h-10 w-10" />
            <p className="text-xs">{item.title}</p>
          </div>
        ))}
      </div>
      <span className="ml-[9rem] ">E-Billing</span>
      <div className="ml-[9rem] flex flex-row gap-10 mt-5">
        <div className="border-2 rounded-lg shadow-md h-[26rem] w-[26rem]">
          <span className=" mt-3 mx-3">Payment Information</span>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://cdn3d.iconscout.com/3d/free/thumb/free-circle-chart-3814145-3187493.png"
              className="h-52 w-52"
              alt=""
            />
            <ol>
              <li>
                Expected Payment - <span>₹ 18,95,007</span>
              </li>
              <hr />
              <li>
                Arrear Payment - <span>₹ 18,95,007</span>
              </li>
              <hr />
              <li>
                Dispute Payment - <span>₹ 18,95,007</span>
              </li>
            </ol>
          </div>
        </div>
        <div className="border-2 rounded-lg shadow-md h-[26rem] w-[26rem] flex flex-col gap-2 justify-center items-center">
          Payment Recieved Mode
          <div>
            <p>Online Payment</p>
            <div>₹ 18,95,007</div>
          </div>
          <div>
            <p>Offline Payment</p>
            <div>₹ 18,95,007</div>
          </div>
          <div></div>
          <p>Total Payment</p>
          <div>₹ 18,95,007</div>
        </div>
        <div className="border-2 rounded-lg shadow-md h-[26rem] w-[26rem] flex flex-col justify-center items-center">
          Payment Recieved in Percentage
          <img
            src="https://lh3.googleusercontent.com/tlaSysikKPaxPJYCSjYygXFAHjcZZxHnn6dvd2RPQiHUCi5ohjO4ECHgGANg0Z2X1Q=w300"
            className="h-52 w-52"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Application;
