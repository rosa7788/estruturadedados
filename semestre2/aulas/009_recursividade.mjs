
function fatorial(n){
    let result = 1

    for(let i = n; i > 1; i--){
        result *= i
    }
    return result
}
console.log("Fatorial de 5:", fatorial(5))

/*

fatorial recursivo

5! = 5*4!
4! = 4*3!
3! = 3*2!
*/

function fatorialRec(n){
    if(n <= 1) {
        return 1
}
return n * fatorialRec(n -1)
}

fatorialRec(5)