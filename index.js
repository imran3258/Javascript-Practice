
const roll = [5, 8, 1, 2, 4, 3];

let len = roll.length;

for(let i=0; i<len; i++){
    for(let j=i+1; j<len; j++){
        if(roll[i] > roll[j]){
            let temp = roll[i];
            roll[i] = roll[j];
            roll[j] = temp;
        }
    }
}

console.log(roll);

roll.sort(function(a,b){
    return b-a;
});

console.log(roll);