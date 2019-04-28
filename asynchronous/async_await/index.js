//Await waokring with promsie

async function show(){
    try{
        await getP1();
        await getP2();
        console.log('test');
    }catch(err){  
        /*async and await not allow to use .catch lilk preomise 
        * we need to use try catch to handle it
        */
        console.log(err.message);
    }
}

function getP1(){
    return new Promise((reslove)=>{
        setTimeout(()=>{
            console.log('P1 Donee');
            reslove('P1 done')
        },2000)
    })
}

function getP2(){
    return new Promise(reslove=>{
        setTimeout(()=>{
            console.log('P2 Donee');
            reslove('P2')
        }, 2000)
    })
}

show() //--> this is ayncs function 
console.log('End game'); //--> end game will print before method show done
