console.log('before');
getUser(1, displayUsername)
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
function getCommits(repo, callback){
    setTimeout(()=>{
        callback([ 
            {id:'avasdasd', desc: 'test commit'}])
    },2000)
}


//Anonymouse with fuction
function displayCommit(commits){
    console.log('Commit : ', commits);
}
function displayRepository(repo){
    getCommits(repo, displayCommit)
    console.log('Repository : ', repo);
}
function displayUsername(user){
    getRepository(user.gitHubUsername, displayRepository)
}