//uploading image on webpage...
const image_input=document.querySelector("#input");
var upload_image;

image_input.addEventListener("change",function(){
    // console.log(image_input.value);
    const reader=new FileReader();
    reader.addEventListener("load",function(){
        upload_image=reader.result;
        document.querySelector("#img").setAttribute("src",`${upload_image}`);

    });
    reader.readAsDataURL(this.files[0]);
});

//when click on generate button

var getCanvas;
var element = document.querySelector("#main");
const generate_btn=document.querySelector("#btn-preview");

generate_btn.addEventListener("click",function(){
    html2canvas(element, {
        onrendered: function (canvas) {
            //taking the value of canvas on get canvas....
                getCanvas = canvas;
            //make invisible of generate button
            var x=document.querySelector("#btn-preview").style;
            x.display="none";
            x=document.querySelector("#downloads").style;
            x.display="inline-block";
            }
        });

});


//downloading the screenshots using html2canvas library..

const download_btn=document.querySelector("#downloads");

download_btn.addEventListener("click",function(){
    var image= getCanvas.toDataURL("image/png");
    const a=document.createElement("a");
    document.body.appendChild(a);
    a.href=image;
    a.download="my-meme.png";
    a.click();
    document.body.removeChild(a);
});

//refreshing the site again...
document.querySelector("#refresh").on('click',function (){
    location.reload();
  })