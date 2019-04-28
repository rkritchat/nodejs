//This is not concurency or multi thread...
// P1 an P2 stated almos same time

const p1 = new Promise((reslove, reject)=>{
    setTimeout(()=>{
        reject(new Error('P1 failed'))
    }, 2000)
})

const p2 = new Promise((reslove)=>{
    setTimeout(()=>{
        reslove('P2')
    }, 2000)
})

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err=> console.log(err.message))