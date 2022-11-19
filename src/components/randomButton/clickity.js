import startMotor1 from "../aloecam/startmotor1";
import Sound1 from "./sound1";
import lightsOn from "../aloecam/lightsOn";

function clickity1() {
    startMotor1();
    Sound1('doh.mp3');
    lightsOn();

  }
  export default clickity1;