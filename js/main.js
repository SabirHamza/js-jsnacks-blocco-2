/********************* 
JSNACK 1
*********************/

const randomnumber = Math.floor(Math.random()*100)+1;

if(randomnumber % 2 == 0){

    console.log(randomnumber);

}else if(randomnumber % 2 !== 0){
    
    console.log(randomnumber + 1);
}

/********************* 
JSNACK 2
*********************/

const numbers = [56, 37, 89, 47, 44, 38, 29, 97, 23];

let odd = 0;

for(let i = 0; i < numbers.length; i++) {

    if(i % 2 !== 0) {
        odd += numbers[i];
    }  
}

console.log(odd);

/********************* 
JSNACK 3
*********************/

const numberlist = [43, 67, 88, 90, 67, 54, 65, 62, 33, 38, 77, 53]

for(let i = 0; i < numberlist.length; i++){

    if(numberlist[i] % 2 == 0){

        document.getElementById('red').innerHTML = numberlist[i];
    }

    else if(numberlist[i] % 2 !== 0){

        document.getElementById('green').innerHTML = numberlist[i];
    }
}

/********************* 
JSNACK 4 (BONUS)
*********************/

const lista = [98, 89, 235, 57, 389, 15, 75, 450, 645, 926, 87, 36, 78,]

const listb = [98, 645, 37, 32, 68, 56, 498, 37, 45]

if(lista.length > listb.length){

    for(let i = listb.length; i < lista.length; i++){

        listb.push(Math.floor(Math.random()*1000)+1);
    }

}else if(listb.length > lista.length){

    for(let i = lista.length; i < listb.length; i++){

        lista.push(Math.floor(Math.random()*1000)+1);
    }
}

console.log(lista);
console.log(listb);

/******************************* 
JSNACK ESERCITAZIONE DI GRUPPO
*******************************/

const result = ['W', 'W', 'L', 'X', 'X', 'W', 'L', 'X', 'W', 'L'];

let winner = 0;
let loser = 0;
let draw = 0;

for(let i = 0; i < result.length; i++){
    

    if(result[i] == 'W'){

        winner++;
    }
    
    else if(result[i] =='L'){
        
        loser++;
    }
    
    else if(result[i] == 'X'){
        
        draw++; 
    }
}

console.log(winner);
console.log(loser);
console.log(draw);