var segitiga = prompt('masukan baris segitiga:');

for (i = 0; i < segitiga; i++){
    var counter = 1;
    for(j = 0; j <= i; j++){
        if(counter > 3){
            var counter = 1;
        }
        if(counter % 2 == 0){
            console.log('#');
        } else if(counter % 3 == 0){
            console.log('%');
        } else {
            console.log('*');
        }
       counter++;
    }
    console.log('\n');
}