function showDetails(droneName) {
  const droneDetails = document.getElementById("droneDetails");
  let description = "";
  let specifications = "";
  let features = "";
  let reviews = "";

  if (droneName === "Drone Cam") {
    description =
      "Drone Cam is ideal for capturing high-definition aerial photography and cinematography with stability and precision. Whether you are shooting a movie or taking stunning landscape shots, Drone Cam offers exceptional image quality with its 4K camera and advanced stabilization system.";
    specifications = `
        <ul>
          <li>Camera: 4K UHD</li>
          <li>Weight: 1.2 kg</li>
          <li>Battery Life: 30 minutes</li>
          <li>Max Speed: 70 km/h</li>
          <li>Range: 5 km</li>
        </ul>
      `;
    features = `
        <ul>
          <li>Advanced Gimbal Stabilization</li>
          <li>Smart Flight Modes (Follow Me, Orbit Mode)</li>
          <li>Real-time HD Video Transmission</li>
          <li>Obstacle Avoidance Sensors</li>
        </ul>
      `;
    reviews = `
        <h4>Customer Reviews:</h4>
        <p>"Amazing camera quality, super stable in flight!" - John Doe</p>
        <p>"A must-have for cinematographers!" - Sarah Smith</p>
      `;
  } else if (droneName === "Drone Delivery") {
    description =
      "Drone Delivery is built for transporting packages with precision and efficiency. With a high payload capacity and long-range capabilities, it is perfect for last-mile deliveries, offering a faster alternative to traditional shipping methods.";
    specifications = `
        <ul>
          <li>Payload Capacity: 5 kg</li>
          <li>Battery Life: 45 minutes</li>
          <li>Max Speed: 60 km/h</li>
          <li>Range: 10 km</li>
        </ul>
      `;
    features = `
        <ul>
          <li>Autonomous Flight Path</li>
          <li>Advanced Tracking System</li>
          <li>High Payload Capacity</li>
          <li>Weather Resistant</li>
        </ul>
      `;
    reviews = `
        <h4>Customer Reviews:</h4>
        <p>"Incredible efficiency! Cuts delivery times by half." - Mark Lee</p>
        <p>"Highly reliable for business deliveries!" - Emily Johnson</p>
      `;
  } else if (droneName === "Drone Fly") {
    description =
      "Drone Fly is perfect for both recreational and competitive drone flying. With high-speed capabilities and a lightweight design, it’s built for flying enthusiasts who love to race or experience thrilling aerial maneuvers.";
    specifications = `
        <ul>
          <li>Weight: 0.9 kg</li>
          <li>Battery Life: 25 minutes</li>
          <li>Max Speed: 100 km/h</li>
          <li>Range: 2 km</li>
        </ul>
      `;
    features = `
        <ul>
          <li>Fast and Agile Flight Performance</li>
          <li>Customizable for Racing</li>
          <li>Easy-to-use Controller</li>
          <li>Enhanced Stability</li>
        </ul>
      `;
    reviews = `
        <h4>Customer Reviews:</h4>
        <p>"Best drone for racing, feels like flying a jet!" - Alex Fisher</p>
        <p>"Perfect for both beginners and pro flyers!" - Chris Walker</p>
      `;
  }

  droneDetails.innerHTML = `
      <h2>${droneName}</h2>
      <p><strong>Description:</strong> ${description}</p>
      <p><strong>Specifications:</strong> ${specifications}</p>
      <p><strong>Features:</strong> ${features}</p>
      <p>${reviews}</p>
      <button class="order-button" onclick="orderNow('${droneName}')">Order Now</button>
    `;
  droneDetails.style.display = "block";
}

function orderNow(droneName) {
  alert("You have chosen to order: " + droneName);
  // You can also redirect to order page here
  // window.location.href = "./order.html";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

function myFunction(x) {
  x.classList.toggle("change");
}
