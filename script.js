const text=document.getElementById("text");
const sizes=document.getElementById("sizes");
const generatebtn=document.getElementById("generatebtn");
const downloadbtn=document.getElementById("downloadbtn");

const qrbody=document.querySelector(".qr-body");

let size=sizes.value;

generatebtn.addEventListener("click", (e)=>{
    e.preventDefault();
    isemptyinput();
})

sizes.addEventListener("change",(e)=>{
    size=e.target.value;
   isemptyinput();
})
function isemptyinput(){
     if(text.value.length>0){
        generateQRCode();
    }
    else{
        alert("Enter Text or URL to generate code.");
    }
}

 function generateQRCode(){
    qrbody.innerHTML="";
    new QRCode(qrbody ,{
        text:text.value ,
        height:size ,
        width:size ,
        colorLight:"#fff",
        colorDark:"#000",
    })
 }

 downloadbtn.addEventListener("click",()=>{
    let img=document.querySelector(".qr-body img");
    if(img !==null){
        let imgAttr=img.getAttribute("src");
     downloadbtn.setAttribute("href",imgAttr);
    }
    else{
        downloadbtn.setAttribute("href",`${document.querySelector("canvas").toDataURL()}`)
    }
 })

