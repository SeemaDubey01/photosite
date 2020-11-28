      // Initialize and add the map
      function initMap() {
        // The location of Raigarh
        const photostudio = { lat: 21.8973514, lng: 83.3979784 };
        // The map, centered at Raigarh
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: photostudio,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: photostudio,
          map: map,
        });
      }