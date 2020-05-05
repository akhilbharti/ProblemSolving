/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var binary = Number(num).toString(2)
    binary = binary.split('')
    var compliment = []
    
    for(let i =0;i<binary.length;i++){
        console.log(i)
        if(binary[i]==='1')
            compliment.push(0)
        else
            compliment.push(1)
    }
     return parseInt(compliment.join(''),2)
};
