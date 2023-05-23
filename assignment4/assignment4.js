//question-1
function mindGame(number){
    if(number>0){
    var output=(((number*3)+10)/2)-5;
    return output;}
    else{
         return ("Please give a positive value");
    }
}

 var result=mindGame(-5);
//  console.log(result);
 var result=mindGame(50);
//  console.log(result);
 var result=mindGame(33);
//  console.log(result);

// question-2
function evenOdd(str)

{ 
    if(typeof str =='string')
    {
    var reminder=str.length%2
    if(reminder==0)
    {
        return console.log("even");
    }
    else{return console.log("odd");}
    }
    else{
         console.log( "Please give a string");
    }

}
var result2=evenOdd('phero');
var result2=evenOdd('Batch7');
var result2=evenOdd('chatgpt');
var result2=evenOdd(5);

// question no-3
function isLGSeven(number)

{
    var sub=number-7;
    if(sub<7)
    {
        return console.log(sub);
    }
    else
    {
        product=number*2;
        return console.log(product);
    }

}
var result3=isLGSeven(6);
var result3=isLGSeven(-15);
var result3=isLGSeven(15);

// question no-4
function findingBadData(numbers)

{
    let count=0;
    for(let i=0;i<numbers.length;i++)
    {
    
     if(numbers[i]<0){
        
         count++;
        
     }

  }
  return count;
}
var Array1=[ 1,2,5];
// console.log(findingBadData(Array1));
var Array2=[ 2, -5, -7, -13 ];
// console.log(findingBadData(Array2));


// q-5
function gemsToDiamond(FirstFriendGems,SecondFriendGems,ThirdFriendGems){
    // if(typeof FirstFriendGems!=='number'||typeof SecondFriendGems!=='number'||typeof ThirdFriendGems!=='number'){
    //     return "Give a number";
    // }
    const FirstFriendGemsPower=21;
    const SecondFriendGemsPower=32;
    const ThirdFriendGemsPower=43;

    const GemstoDiamond1=FirstFriendGemsPower*FirstFriendGems;
    const GemstoDiamond2=SecondFriendGemsPower*SecondFriendGems;
    const GemstoDiamond3=ThirdFriendGemsPower*ThirdFriendGems;

    TotalDiamond=GemstoDiamond1+GemstoDiamond2+GemstoDiamond3;
    if(TotalDiamond>(1000*2)){
       var restofDiamond= TotalDiamond-2000;
       return restofDiamond;
    }
    else{
        return TotalDiamond;
    }
  
}

var result5=gemsToDiamond('1',1,1);
console.log(result5);
// var result5=gemsToDiamond(20,200,50);
// console.log(result5);
// var result5=gemsToDiamond(100,5,1);
// console.log(result5);
function compare(a, b) {

    if (a == b) {
   
    return true;
   
    } else {
   
    return false;
   
    }
   
   }
   
   const result = compare(15, "15");
   
   console.log(result);





