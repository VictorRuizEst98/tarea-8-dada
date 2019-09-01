console.log("Valor absoluto de los numeros")

function valorAbsoluto(numero){
    if(numero < 0 )
        return numero*-1
    else 
        return numero
}


function main(){
    console.log(valorAbsoluto(2))
    console.log(valorAbsoluto(-712))
    console.log(valorAbsoluto(-4))
    console.log(valorAbsoluto(256))
}

main();