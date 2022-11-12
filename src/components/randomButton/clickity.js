import startMotor1 from "../aloecam/startmotor1";
import Sound1 from "./sound1";

function clickity1() {
    startMotor1();
    Sound1('doh.mp3');
    var ifr = document.getElementsByName('clickCounter')[0];
    ifr.src = ifr.src;
  }

  export default clickity1;