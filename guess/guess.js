var main = true;

alert('masukkan angka 1-10 untuk menebak angka dalam 3x kesempatan!')
while(main){
    for(i = 2; i >=0; i--){
        var angka = prompt('masukkan tebakan angka:');

        var comp = Math.floor(Math.random() * 10) + 1;

    var hasil = '';
    if(angka < comp){
        if(i == 0){
            var chance = 'HABIS!';
        }else{
            chance = i;
        }   
        alert('Tebakan angka masih RENDAH!\nKesempatan tersisa: ' + chance);
    } else if(angka > comp){
        if(i == 0){
            var chance = 'HABIS!';
        }else{
            chance = i;
        }  
        alert('Tebakan angka terlalu TINGGI!\nesempatan tersisa:' + chance);
    } else{
        alert('tebakan angka anda BENAR!\nangkanya adalah: ' + comp);
        break;
    }
    }

    main = confirm('main lagi?');
}

alert('terima kasih telah bermain!');