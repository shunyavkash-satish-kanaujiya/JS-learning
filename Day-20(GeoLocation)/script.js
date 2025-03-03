function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("location").innerText =
      "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById(
    "location"
  ).innerHTML = `Latitude: ${position.coords.latitude} <br> Longitude: ${position.coords.longitude}`;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      document.getElementById("location").innerText =
        "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      document.getElementById("location").innerText =
        "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      document.getElementById("location").innerText =
        "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      document.getElementById("location").innerText =
        "An unknown error occurred.";
      break;
  }
}
