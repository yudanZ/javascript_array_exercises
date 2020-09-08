var array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

//function to put same number of value in sub string
function sortedArraybyGroup(arr){
    //console.log(arr);
    let sortedArr = sortedArraybyNum(arr);
    return sortedArr.reduce((r, v, i, a) => {

        if( v === a[i-1]){
            r[r.length -1].push(v);
        }else {
            r.push(v === a[i + 1] ? [v] : v);
        }
        return r;
        //console.log(r);
        //console.log(v);
        //console.log(i);
        //console.log(a);

    }, []);
}

//Function to put array in ascending numerical order
function sortedArraybyNum (arr ){
    
    return arr.sort( (a,b) =>{
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

   
}

//Function to group array by string and integer
function sortedArrayByType (arr){
    let intArr = [];
    let strArr = [];
    let flatArr = arr.flat(100);
    let newArr = [];

    flatArr.filter(el => isInteger(el) ? intArr.push(el) : strArr.push(el));

    newArr.push(intArr);
    newArr.push(strArr);

    return newArr;
}

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

//1. Test RGB/HEX
//a. RGB begins with rgb followed by () containing with 3 values, divided by spaces and/or commas;
//b. HEX begins with a # and is either 3 or 6 numbers without any division
let which = (str) => str.includes("#");

//2. If HEX
//Function to split hex into 3 values:
let splitHex = (str) => {
  if (str.length === 4) {
    let [r, g, b] = str.match(/[A-F0-9]{1}/gi);
    return [r + r, g + g, b + b];
  }
  if (str.length === 7) {
    return str.match(/[A-F0-9]{2}/gi);
  }
};

//Convert each value to base 10
let parseHex = (num) => parseInt(num, 16);

//3. If RGB
//First seperate the values:
let splitRGB = (rgb) => rgb.match(/\b[0-9]{1,3}\b/g);

//Convert to base 16
let parseRGB = (num) => {
  //Turn the string to an integer in base 10 in order to turn it to a string in base 16...yeah...
  let integer = parseInt(num, 10);
  return integer.toString(16);
};

//Complete conversion function: enter either format and return the other
let convert = (str) => {
  if (which(str) === true) {
    //HEX -> RGB
    let split = splitHex(str);
    let [r, g, b] = split.map(parseHex);
    return `rgb(${r}, ${g}, ${b})`;
  } else {
    //RGB -> HEX
    let split = splitRGB(str);
    let [r, g, b] = split.map(parseRGB);
    return `#${r}${g}${b}`;
  }
};

