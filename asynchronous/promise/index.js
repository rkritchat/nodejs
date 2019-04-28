const p = new Promise((reslove, reject)=>{
    setTimeout(()=>{
        //reslove(1) //pending => resolve
        reject(new Error('message')) // pending => reject
    },2000)
    //reject(new Error('message'))
})

p.then(result =>{
    console.log('Result :', result);
}).catch(err=> console.log('Error', err.message))