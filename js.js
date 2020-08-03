const footer=document.querySelector('.footer');

var ime="\251Nenad Stojadinovic 2020";
var imeU=ime.toUpperCase();
var imeSplit=imeU.split('');
console.log(imeSplit)
var st;
var i=0;
var arr=[imeSplit];
function fg(){
  
    
    if(arr[i].length > 0){
        
        footer.innerHTML+=arr[i].shift();
        st=setTimeout(fg,500);
        
    }
    else{
    
        i++;
        
    }
   footer.style.fontSize=1.5+"rem";
 }
fg();