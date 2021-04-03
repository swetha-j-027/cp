
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    
    document.getElementById("cordovaDevice").addEventListener("click",cordovaDevice);

    document.addEventListener("offline", onOffline);
    document.addEventListener("online", onOnline);
    document.getElementById("check").addEventListener("click", checknetworkinfo)
}

function cordovaDevice() {
    alert("Cordova version: " + device.cordova + "\n" +
    "Device model: " + device.model + "\n" +
    "Device platform: " + device.platform + "\n" +
    "Device UUID: " + device.uuid + "\n" +
    "Device version: " + device.version);
}

function checknetworkinfo() 
{
        var connectiontype = navigator.connection.type;
        var status={};


status[Connection.ETHERNET] = 'Ethernet connection';
status[Connection.WIFI] = 'WiFi connection';
status[Connection.CELL_2G] = 'Cell 2G connection';
status[Connection.CELL_3G] = 'Cell 3G connection';
status[Connection.CELL_4G] = 'Cell 4G connection';
status[Connection.CELL] = 'Cell generic connection';
status[Connection.NONE] = 'No network connection';
status[Connection.UNKNOWN] = 'Unknown connection';
   alert('Connection type: ' + status[connectiontype]);
}

function onOffline() {
alert('You are now offline!');
}
function onOnline() {
    alert('You are now online!');

}
