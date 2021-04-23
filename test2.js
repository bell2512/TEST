let str1 = prompt("Enter string one");
let str2 = prompt('Enter string two');
function mergestr(str1, str2){
    let size = Math.max(str1.length, str2.length);
    let s = [];
    a = str1.split("");
    b = str2.split("");
    for(let i = 0; i < size; i++){
        if(a[i] !== null && b[i] !== null){
            s.push(a[i]);
            s.push(b[i]);
        }
        else if(a[i] === null){
            s.push(b[i]);
        }
        else if (b[i] === null){
            s.push(a[i]);
        }
    }
    return s;
}

let str_result = mergestr(str1, str2);
console.log(str_result.join(""));
