console.log('before');
getUser(1, (user)=>{
    getRepository(user.gitHubUsername, (repo)=>{
        console.log('Repository : ', repo);
        //CALLBACK HELL
    })
})
console.log('after');

function getUser(id, callback) {
    setTimeout(()=>{
        console.log('Reading user from database');
        callback({id: id, gitHubUsername: 'kritchat'})
    }, 2000)
}

function getRepository(usename, callback){
    setTimeout(()=>{
        console.log('Calling githup api');
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
}