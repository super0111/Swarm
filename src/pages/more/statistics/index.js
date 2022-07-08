import { useContext } from "react";
import { useCookies } from "react-cookie";
import { Container, Table } from "react-bootstrap";
import moment from 'moment';
import classes from "./statistics.module.css";
import { Context } from "../../../context/AppContext";

const Statistics = () => {
  const [ cookies ] = useCookies([
    "hatcheryClick",
    "startTime",
    "droneTime",
    "hatcheryTime",
  ]);
  const { 
    droneCount, 
    droneClick, 
    hatcheryClick,
    queenCount,
    queenClick,
    fasterDronesCounter,
    twinDronesCounter,
  } = useContext(Context);
  
  return (
    <Container>
      <h1>Statistics</h1>
      <div className={classes.divider1}></div>
      <Table responsive>
        <thead>
          <tr className={classes.divider2}>
            <th> Unit</th>
            <th>First Bought</th>
            <th>Clicks</th>
            <th>Bought Manually</th>
            <th>Twins</th>
          </tr>
        </thead>
        <tbody>
          <tr className={classes.divider1}>
            <td>Meat</td>
          </tr>
          <tr className={classes.divider1}>
            <td>Larva</td>
          </tr >
          <tr className={classes.divider1}>
            <td>Crystal</td>
          </tr>
          <tr className={classes.divider1}>
            <td>Drone</td>
            <td>{ cookies.droneTime ? moment(cookies.droneTime).format('hh:mm:ss') : ""}</td>
            <td>{ droneClick }</td>
            <td>{ droneCount }</td>
            <td>{ droneCount }</td>
          </tr>
          { queenClick > 0 ?
            <tr className={classes.divider1}>
              <td>Queen</td>
              <td>{ cookies.queenTime ? moment(cookies.queenTime).format('hh:mm:ss') : ""}</td>
              <td>{ queenClick }</td> 
              <td>{ queenCount }</td>
              <td>{ queenCount }</td>
            </tr> : ""
          }
        </tbody>
      </Table>
      <div>
        {
          hatcheryClick > 0 ?
          <Table responsive>
            <thead>
              <tr className={classes.divider2}>
                <th> Upgrade</th>
                <th>First Bought</th>
                <th>Clicks</th>
                <th>Total Bought</th>
              </tr>
            </thead>
            <tbody>
              { cookies.hatcheryTime == "undefined" ? "" :
                <tr className={classes.divider1}>
                  <td>Hatchery</td>
                  <td>{ cookies.hatcheryTime ? moment(cookies.hatcheryTime).format('hh:mm:ss') : ""}</td>
                  <td>{ hatcheryClick }</td>
                  <td>{ hatcheryClick }</td>
                </tr >
              }
              { fasterDronesCounter > 0 ?
                <tr className={classes.divider1}>
                  <td>Faster Drones</td>
                  <td>{ cookies.fasterDronesTime ? moment(cookies.fasterDronesTime).format('hh:mm:ss') : ""}</td>
                  <td>{ fasterDronesCounter }</td>
                  <td>{ fasterDronesCounter }</td>
                </tr > : ""
              }
              { twinDronesCounter > 0 ?
                <tr className={classes.divider1}>
                  <td>Twin Drones</td>
                  <td>{ cookies.twinDronesTime ? moment(cookies.twinDronesTime).format('hh:mm:ss') : ""}</td>
                  <td>{ twinDronesCounter }</td>
                  <td>{ twinDronesCounter }</td>
                </tr > : ""
              }
            </tbody>
          </Table> : <span>No upgrades purchased</span>
        }
        <div className={classes.flex}>
          <div className={classes.flexCol1}>
            <strong>Save File Size</strong>
            <strong>Start Date</strong>
            <strong>Last Ascended</strong>
          </div>
          <div className={classes.flexCol2}>
            <span>1,005 base64 chars</span>
            <span>
              { moment(cookies.startTime).fromNow() } - 
              { moment(cookies.startTime).format('MMMM Do YYYY, h:mm:ss a') }
            </span>
            <span>never</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Statistics