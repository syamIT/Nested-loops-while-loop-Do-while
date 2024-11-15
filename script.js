// TOPIC : Nested loops,while-loop,Do-while
// while loops
let i = 1;
while(i < 11){
    console.log(`2 X ${i} = 2*${i}`)
    i++
}
// nested loops in while loops
let outer = 1;
while(outer <= 5){
    let inner = 1;
    while(inner <= 10){
        console.log(`${outer} X ${inner} = ${outer} * ${inner}`)
        inner++;
    }
    outer++;
}


// do - while loops
let test = 1;
do{
    console.log(test);
    test++;
}while(test <= 5);



// nested loops in do - while loops
let task = 10;
do{
    console.log(task)
    let innerTask = 0;
    do{
        console.log(innerTask);
        innerTask++;
        
    }while(innerTask < 5)
        task++;
}
while(task <= 5)