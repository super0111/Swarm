import React from "react";
import { useCookies } from "react-cookie";
import { 
  BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import Layout from "./components/Layout";
import Meat from "./pages/meat";
import Larvae from "./pages/larvae";
import QueenDeatils from "./pages/meat/queenDetails";
import LarvaDetails from "./pages/larvae/LarvaDetails";
import DroneDeatils from "./pages/meat/droneDetails";
import MeatDetails from "./pages/meat/meatDetails";
import Options from "./pages/more/options";
import Decimallegend from "./pages/more/options/decimallegend";
import Achievements from "./pages/more/achievements";
import Statistics from "./pages/more/statistics";
import Changelog from "./pages/more/changelog";
import Contact from "./pages/more/contact";
import All from "./pages/more/all";
import CrystalDetails from "./pages/more/all/crystal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useContext } from 'react'
import { Context } from './context/AppContext'

export const Root = () => {
  const {
    startCount,
    velocity,
    numFormart,
    durationFormart,
    meatCount, 
    droneCount, 
    larvaeNum,
    droneClick,
    fasterDronesCounter,
    twinDronesCounter,
    queenCount,
    queenClick,
    hatcheryCount, 
    hatcheryClick, 
    advanceUnit,
    upgradeNotify,
    expansionNotify,
    fasterNotify,
    twinNotify,
  } = useContext(Context)
  const [ cookies, setCookie ] = useCookies([
    "startCount",
    "velocity", 
    "numFormart",
    "durationFormart",
    "meatCount", 
    "droneCount",
    "larvaeCount",
    "droneClick",
    "fasterDronesCounter",
    "twinDronesCounter",
    "queenCount",
    "hatcheryCount",
    "hatcheryClick",
    "hatcheryTime",
    "isCheckedUnit",
    "upgradeNotify",
    "expansionNotify",
    "fasterNotify",
    "twinNotify",
  ]);

  useEffect(() => {
    setCookie("startCount", startCount , { path: '/' });
  }, [ startCount ])

  useEffect(() => {
    setCookie("velocity", velocity , { path: '/' });
  }, [ velocity ])

  useEffect(() => {
    setCookie("numFormart", numFormart , { path: '/' });
  }, [ numFormart ])
  
  useEffect(() => {
    setCookie("durationFormart", durationFormart , { path: '/' });
  }, [ durationFormart ])

  useEffect(() => {
    setCookie("meatCount", meatCount , { path: '/' });
  }, [ meatCount ])

  useEffect(() => {
    setCookie("droneCount", droneCount , { path: '/' });
  }, [droneCount])

  useEffect(() => {
    setCookie("larvaeCount", larvaeNum , { path: '/' });
  }, [larvaeNum])

  useEffect(() => {
    setCookie("droneClick", droneClick , { path: '/' });
  }, [droneClick])

  useEffect(() => {
    setCookie("fasterDronesCounter", fasterDronesCounter , { path: '/' });
  }, [fasterDronesCounter])

  useEffect(() => {
    setCookie("twinDronesCounter", twinDronesCounter , { path: '/' });
  }, [twinDronesCounter])

  useEffect(() => {
    setCookie("queenCount", queenCount , { path: '/' });
  }, [queenCount])

  useEffect(() => {
    setCookie("queenClick", queenClick , { path: '/' });
  }, [queenClick])

  useEffect(() => {
    setCookie("hatcheryCount", hatcheryCount , { path: '/' });
  }, [ hatcheryCount ])

  useEffect(() => {
    setCookie("hatcheryClick", hatcheryClick , { path: '/' });
  }, [ hatcheryClick ])

  useEffect(() => {
    setCookie("advanceUnit", advanceUnit , { path: '/' });
  }, [ advanceUnit ])

  useEffect(() => {
    setCookie("upgradeNotify", upgradeNotify , { path: '/' });
  }, [ upgradeNotify ])
  useEffect(() => {
    setCookie("expansionNotify", expansionNotify , { path: '/' });
  }, [ expansionNotify ])
  useEffect(() => {
    setCookie("fasterNotify", fasterNotify , { path: '/' });
  }, [ fasterNotify ])
  useEffect(() => {
    setCookie("twinNotify", twinNotify , { path: '/' });
  }, [ twinNotify ])

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={ <Meat />} />
          <Route exact path="/meat" element={ <Meat />}>
          <Route path="queen" element={<QueenDeatils />} />
            <Route path="drone" element={<DroneDeatils />} />
            <Route path="meat" element={<MeatDetails />} />
          </Route>
          <Route path="/larvae" element={<Larvae />}>
            <Route path="larva" element={<LarvaDetails />} />
          </Route>
          <Route path="/options" element={<Options />} />
          <Route path="/decimallegend" element={<Decimallegend />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/all" element={<All />}>
            <Route path="meat" element={<MeatDetails />} />
            <Route path="larva" element={<LarvaDetails />} />
            <Route path="crystal" element={<CrystalDetails />} />
            <Route path="drone" element={<DroneDeatils />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}