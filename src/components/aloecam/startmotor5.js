function startMotor5() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText); //To check output while error[Optional]
      }
    };
    xhttp.open("GET", "https://motor.aloecam.duckdns.org/motorOn5", true);
    xhttp.send();
  }

  export default startMotor5