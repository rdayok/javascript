var arr = [4, 7, 10, 10, -1, 10, 9, 100, 99.7]
var firstLarges;
var secondLargest;
for(let index = 0; index < arr.length; index++){
    if (index == 0) {
        firstLarges = arr[index];
        secondLargest = arr[index];
    }
    if (arr[index] > firstLarges){
        secondLargest = firstLarges;
        firstLarges = arr[index];
    }
    if(arr[index] < firstLarges && arr[index] > secondLargest ){
        secondLargest = arr[index]
    }
}
console.log("first largest element is "+ firstLarges)
console.log("second largest element is "+ secondLargest)