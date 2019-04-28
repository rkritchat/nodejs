
console.log('before');
// getUser(1, (user)=>{
//     getRepository(user.gitHubUsername, (repo)=>{
//         console.log('Repository : ', repo);
//         //CALLBACK HELL
//     })
// })

getUser(1)
    .then(user => getRepository(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log(commits))
    .catch(err => console.log('Error : ', err.message))

console.log('after');

function getUser(id) {
    return new Promise((reslove, reject)=>{
        setTimeout(()=>{
            console.log('Reading user from database');
            reslove({id: id, gitHubUsername: 'kritchat'})
        }, 2000)
    })
}

function getRepository(usename){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Calling githup api');
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000);
    })
}

function getCommits(commit){
    return new Promise((reslove, reject)=>{
        setTimeout(()=>{
            console.log('Calling get commits');
            reslove([{id:'sadwdsadsad', desc: 'test commit'}])
        },2000)
    })
}