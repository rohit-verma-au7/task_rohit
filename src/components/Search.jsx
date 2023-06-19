import React from "react";
import TableOfContentLogo from "../assets/map tab/table_of_content.svg";
import SearchLogo from "../assets/map tab/map_search.svg";
import StateBoundry from "../assets/mapicon/state_boundary.svg";
import MunicipalBoundry from "../assets/mapicon/municaipal.svg";
import VillageBoundry from "../assets/mapicon/village.svg";
import BlockBoundry from "../assets/mapicon/block.svg";
import Building from "../assets/mapicon/building_footprint.svg";

import Huntman from "../assets/mapicon/huntment.svg";
import LandUse from "../assets/mapicon/land_estate.svg";
import RailwayStation from "../assets/mapicon/Railway_metro_station.svg";

import LayOutBoundry from "../assets/mapicon/landuse_landcover.svg";
import LayOutBoundry1 from "../assets/mapicon/landuse_landcover.svg";
import LayOutBoundry2 from "../assets/mapicon/landuse_landcover.svg";
import LayOutBoundry3 from "../assets/mapicon/landuse_landcover.svg";

import OilTanker from "../assets/mapicon/reservoir.svg";
import OilTanker2 from "../assets/mapicon/reservoir.svg";
import OilTanker3 from "../assets/mapicon/reservoir.svg";
import OilTanker4 from "../assets/mapicon/reservoir.svg";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      <div className="h-[38rem] w-[30rem] border-2 rounded-lg shadow-xl bg-slate-50 ml-[8rem]  mt-[1rem]">
        <div className="flex flex-row gap-2 items-start justify-start">
          <div className="bg-slate-50 h-[7rem] m-4 border-2 rounded-lg shadow-xl w-[13rem] inline-flex flex-col items-center justify-center">
            <img
              src={TableOfContentLogo}
              alt="tableof contaent"
              className="h-12 w-12"
            />
            <Link to={"/"}>Table of Content</Link>
          </div>
          <div className="bg-slate-50 h-[7rem] m-4 border-2 rounded-lg shadow-xl w-[13rem] inline-flex flex-col items-center justify-center">
            <img src={SearchLogo} alt="search" className="h-12 w-12" />
            <div>
              <Link to={"/search"}>Search</Link>
            </div>
          </div>
        </div>
        <div className="inline-flex flex-row items-center justify-center gap-12 mx-10">
          <h1>Search : </h1>
          <span>
            <input
              type="search"
              className="border-2 rounded-md px-2 "
              placeholder="search..."
            />
          </span>
        </div>
        <div className="grid grid-cols-4 gap-5 m-2 p-2">
          <form>
            <label htmlFor="">Village/Division </label>
            <select
              name="village"
              id="village"
              className="border-2 rounded-md shadow w-[28rem] mb-4"
            >
              <option>Select</option>
            </select>

            <label htmlFor="">Layout </label>
            <select
              name="village"
              id="village"
              className="border-2 rounded-md shadow w-[28rem] mb-4"
            >
              <option>Select</option>
            </select>
            <label htmlFor="">City </label>
            <select
              name="village"
              id="village"
              className="border-2 rounded-md shadow w-[28rem] mb-4"
            >
              <option>Select</option>
            </select>
            <label htmlFor="">Plot </label>
            <select
              name="village"
              id="village"
              className="border-2 rounded-md shadow w-[28rem] mb-4"
            >
              <option>Select</option>
            </select>
            <label htmlFor="">Building </label>
            <select
              name="village"
              id="village"
              className="border-2 rounded-md shadow w-[28rem] mb-4"
            >
              <option>Select</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
