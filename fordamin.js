// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

function minValue(values){
    // The code below is for elements with more than one digit
    // We assign an array stringarr so can first convert each element of the array into a string so we can use the for loop. 
    stringarr = []
    for(i=0; i<=values.length-1; i++){
        stringarr.push(values[i].toString())
    }

    arrint = []
    for(i=0; i<=stringarr.length-1; i++){
        if(stringarr[i].length != 1){
            for(j=0; j<=stringarr[i].length-1; j++){
                arrint.push(stringarr[i][j])
            }
        } else {
            arrint.push(stringarr[i])
        }
    }
    // console.log(arrint)
    // The code above is for elements with more than one digit

    valuesarr = []
    for(i=0; i<=values.length-1; i++){
        valuesarr.push(values[i])
    }

    // Sorting the numbers into ascending order
    arrint.sort(function(a, b){return a-b});
    // console.log(arrint)

    // Getting the unique values, omitting the duplicates
    let unique = [...new Set(arrint)];
    // console.log(unique);

    // // Converting the unique values to a string, the ascending order of the integers will be the smallest possible value
    arrstring = unique.toString()
    const lowestnumber = arrstring.replace(/,/g, '');
    console.log(`${lowestnumber} is the minimum number could be formed from ${valuesarr}. Without duplication`);

}
minValue([9856,12,45,64,785,0])
console.log('=====')
minValue([1,1,1,1])