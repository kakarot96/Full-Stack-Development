
function printReverse(arr){
for(var i=arr.length-1;i>=0;i--){
console.log(arr[i]);
}
}

function isUniform(arr){
    var flag=true;
    for(var i=1;i<arr.length;i++){
        if(arr[i] !== arr[i-1]){
            console.log("False");
            return false;
        }
    }
    console.log("True");
    return true;
}

function sumArray(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++)sum+=arr[i];
    console.log(sum);
    return sum;
}

function max(arr){
var max =arr[0];
 for(var i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
 }
 console.log(max);
 return max;
}

printReverse([1,3,4,5,6,9]);
isUniform([1,1,1,1,1]);
isUniform([1,1,3,1,1]);
isUniform(["a","a","a"]);
isUniform(["b","a","b"]);
sumArray([1,3,4,5,6,9]);
max([1,3,11,5,6,9]);

