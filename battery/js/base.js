(function () {
    var battery = navigator.battery,
        batteryLevel = document.getElementById("battery-level"),

    if (battery) {
        function setStatus () {
            batteryLevel.innerHTML = Math.round(battery.level * 100) + "%";
        }
        // Set initial status
        setStatus();
    
        // Set event to update battery staus on change
        battery.addEventListener("levelchange", setStatus, false);
    }
    else {
        batteryLevel.innerHTML = "Battery API not supported on your device/computer";
    }
})();
