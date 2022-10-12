declare let window: any

export async function requestAccounts(){
    return await window.ethereum.request({ method: 'eth_requestAccounts' });
}


export async function getBalance(account:string): Promise<string>{
    return await window.ethereum.request({ method: 'eth_getBalance', params:[account, 'latest']});
}