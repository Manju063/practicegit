//array concepts
let arr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2: Array<string> = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

for (let i = 0; i < arr1.length; i++) {
    
        if (arr1[i] % 2 === 0) {
        console.log(arr1[i] + " is even");
    }
    else {
        console.log(arr1[i] + " is odd");
    } 

}

for (let i = 0; i < arr2.length; i++) {
    
    if (arr2[i] === "a" || arr2[i] === "e" || arr2[i] === "i" || arr2[i] === "o" || arr2[i] === "u") {
        console.log(arr2[i] + " is a vowel");
    }
    else {
        console.log(arr2[i] + " is a consonant");
    }
}   

