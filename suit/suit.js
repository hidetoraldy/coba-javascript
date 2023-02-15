var tanya = true;

while(tanya){
var pemain = prompt('pilih: kertas, gunting, batu');

var comp = Math.random();

if(comp < 0.34){
    comp = 'kertas';
}else if(comp >=0.34 && comp < 0.67){
    comp = 'gunting';
}else{
    comp = 'batu';
}

var hasil = '';
if(pemain == comp){
    hasil = 'SERI!';
}else if(pemain == 'kertas'){
    /*if(comp == 'gunting'){
        hasil = "KALAH!";
    }else{
        hasil = "MENANG!";
    }*/
    hasil = (comp == 'gunting') ? 'KALAH!' : 'MENANG!';
}else if(pemain == 'gunting'){
    hasil = (comp == 'batu') ? 'KALAH!' : 'MENANG!';
}else if(pemain == 'batu'){
    hasil = (comp == 'kertas') ? 'KALAH!' : 'MENANG!';
}else{
    hasil = 'memasukkan pilihan yang salah!';
}

alert('Kamu memilih ' + pemain + '\ndan komputer memilih ' + comp + '\nHasilnya kamu ' + hasil);
tanya = confirm('main lagi?');
}

alert('terima kasih telah bermain!');