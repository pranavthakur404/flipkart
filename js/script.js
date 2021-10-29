// banner slider
flag = 0;

function controler(x){
  flag = flag + x;
  slideShow(flag);
}

slideShow(flag);

function slideShow(x){

    let slide = document.getElementsByClassName('banner-box');

    if(x >= slide.length){
        flag=0;
        x=0;
    }

    if(flag < 0){
        flag = slide.length-1;
        x= slide.length-1;
    }

    for(y of slide){
        y.style.display="none";
    }

    slide[x].style.display='block'
}
// banner slider ends

// items slider
var left = 1;
var right=6;
function show(){
    for(i=left;i<=right;i++){
        document.getElementById('box'+i).style.display="block";
    }
}

function rightClick(){
   if(left<=2 && right<=7){
    document.getElementById('box'+left).style='none';
    left+=1;
    right+=1;
    for(i=left;i<=right;i++){
        document.getElementById('box'+i).style.display='block';
    }
   }
}
function leftClick(){
   if(left>=2 && right>=7){
    document.getElementById('box'+right).style.display='none';
    left-=1;
    right-=1;
    for(i=left;i<=right;i++){
        document.getElementById('box'+i).style.display='block';
    }
   }

}