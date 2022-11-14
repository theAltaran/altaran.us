import startMotor1 from "../aloecam/startmotor1";
import Sound1 from "./sound1";
import fetchData from "../aloecam/clicks"


function clickity1() {
    startMotor1();
    Sound1('doh.mp3');
    fetchData();
}
  export default clickity1;