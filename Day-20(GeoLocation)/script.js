///////////////////////////////////////// GET USER'S CURRENT LOCATION ////////////////////////////////////////////////////

// const getLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition, showError);
//   } else {
//     document.getElementById("location").innerText =
//       "Geolocation is not supported by this browser.";
//   }
// };

// const showPosition = (position) => {
//   const { latitude, longitude } = position.coords;
//   document.getElementById(
//     "location"
//   ).innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}`;
//   getUserAddress(latitude, longitude);
// };

// const getUserAddress = async (latitude, longitude) => {
//   const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C+${longitude}&key=5810b0e26e6a4f19ada876d85077fa6c`;
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     document.getElementById(
//       "userLocation"
//     ).textContent = `User Location :- ${data.results[0].formatted}`;
//   } catch (err) {
//     console.log(err);
//   }
// };

// const showError = (error) => {
//   console.log(error);
//   switch (error.code) {
//     case error.PERMISSION_DENIED:
//       document.getElementById("location").innerText =
//         "User denied the request for Geolocation.";
//       break;
//     case error.POSITION_UNAVAILABLE:
//       document.getElementById("location").innerText =
//         "Location information is unavailable.";
//       break;
//     case error.TIMEOUT:
//       document.getElementById("location").innerText =
//         "The request to get user location timed out.";
//       break;
//     case error.UNKNOWN_ERROR:
//       document.getElementById("location").innerText =
//         "An unknown error occurred.";
//       break;
//   }
// };

//////////////////////////////////// GET USER'S LIVE LOCATION ///////////////////////////////////

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition, showError);
  } else {
    document.getElementById("location").innerText =
      "Geolocation is not supported by this browser.";
  }
};

const showPosition = (position) => {
  const { latitude, longitude } = position.coords;
  document.getElementById(
    "location"
  ).innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}`;
  getUserAddress(latitude, longitude);
};

const getUserAddress = async (latitude, longitude) => {
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C+${longitude}&key=5810b0e26e6a4f19ada876d85077fa6c`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    document.getElementById(
      "userLocation"
    ).textContent = `User Location :- ${data.results[0].formatted}`;
  } catch (err) {
    console.log(err);
  }
};

const showError = (error) => {
  console.log(error);
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
};
