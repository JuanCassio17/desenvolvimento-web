const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) {
    if (x == 5) {  // vai parar no momento que encontrar o índice 5
        break
    } 
    console.log(`${x} = ${nums[x]}`);
}

for (y in nums) {
    if(y == 5) { // vai continuar para o próximo índice, pulando o 5
        continue
    }
    console.log(`${y} = ${nums[y]}`);
}

// não é muito utilizado
externo: for (a in nums){
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`);
    }
}