function lightsOn() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText); //To check output while error[Optional]
      }
    };    
    xhttp.open("GET", "https://aloecam.ddns.net:5000/lightsOn", false);
    xhttp.send();
  }
  
  export default lightsOn