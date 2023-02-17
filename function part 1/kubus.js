/*var kubus1 = prompt('masukkan sisi kubus 1:');
    kubus2 = prompt('masukkan sisi kubus 2:');

var volume1 = kubus1**3;
    volume2 = kubus2**3;

var total = volume1 + volume2;

alert('total kedua volume kubus adalah: ' + total);*/

function jumlahVolumeDuaKubus(sisi1, sisi2) {
    var total;

    var volumeKubus1 = sisi1 ** 3;
        volumeKubus2 = sisi2 ** 3;

    var total = volumeKubus1 + volumeKubus2;
    return total;
}

alert(jumlahVolumeDuaKubus(8, 3));
