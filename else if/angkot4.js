var i = 1;
    x = 10;
    j = 6;

for(i; i <= x; i++){
    if(i <= 4 || i === 6){
        console.log('Angkot No.' + i + ' sedang beroperasi.');
    }else if(i === 8 || i === 10 || i === 5){
        console.log('Angkot No.' + i + ' sedang lembur.');
    }else{
        console.log('Angkot No.' + i + ' sedang rusak.');
    }
    
}