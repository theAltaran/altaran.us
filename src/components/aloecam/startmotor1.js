function startMotor1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText); //To check output while error[Optional]
      }
    };
    xhttp.open("GET", "http://aloecam.ddns.net:5000/motorOn", true);
    xhttp.send();
  }

  export default startMotor1