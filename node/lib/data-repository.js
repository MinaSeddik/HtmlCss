
let repo_global_var = 0;

export function callMe(){
    console.log("callMe: "+ repo_global_var);
    repo_global_var++;
}

export function getVal(){
    return repo_global_var;
}
