export function randomHash(leng:number) {
    const options = "qwertyuiopasdfghjklzxcvbnm1234567890"
    const optionsArray = options.split("");
    let ans = []
    for(let i = 0;i<leng;i++){
      ans.push(optionsArray[Math.floor(Math.random() * optionsArray.length)])
    }
    console.log(ans)
    return ans.join("");
    
}