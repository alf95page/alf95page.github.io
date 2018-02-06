/* ####################### begins list of images to be used

####################### */

currentIndx=0;

MyImages=new Array();
MyImages[0]='images/randomimages/01.png';
MyImages[1]='images/randomimages/02.png';
MyImages[2]='images/randomimages/03.png';
MyImages[3]='images/randomimages/04.png';
MyImages[4]='images/randomimages/05.png';
MyImages[5]='images/randomimages/06.png';
MyImages[6]='images/randomimages/07.png';
MyImages[7]='images/randomimages/08.png';
MyImages[8]='images/randomimages/09.png';
MyImages[9]='images/randomimages/10.png';
MyImages[10]='images/randomimages/11.png';
MyImages[11]='images/randomimages/12.png';
MyImages[12]='images/randomimages/13.png';
MyImages[13]='images/randomimages/14.png';
MyImages[14]='images/randomimages/15.png';
 

/* ####################### now we preload the images ####################### */

imagesPreloaded = new Array(15)

for (var i = 0; i < MyImages.length ; i++)

{

imagesPreloaded[i] = new Image(120,120)

imagesPreloaded[i].src=MyImages[i]

}


/* ####################### this function loads a random image ####################### */

function newImage() {

// Makes a random, whole number between 0 and 14

currentIndx=Math.round(Math.random()*14)

document.theImage.src=imagesPreloaded[currentIndx].src

}