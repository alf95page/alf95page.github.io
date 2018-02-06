/* ####################### begins list of images to be used

####################### */

currentIndx=0;

MyImages=new Array();
MyImages[0]='images/randomimages/01.jpg';
MyImages[1]='images/randomimages/02.jpg';
MyImages[2]='images/randomimages/03.jpg';
MyImages[3]='images/randomimages/04.jpg';
MyImages[4]='images/randomimages/05.jpg';
MyImages[5]='images/randomimages/06.jpg';
MyImages[6]='images/randomimages/07.jpg';
MyImages[7]='images/randomimages/08.jpg';
MyImages[8]='images/randomimages/09.jpg';
MyImages[9]='images/randomimages/10.jpg';
MyImages[10]='images/randomimages/11.jpg';
MyImages[11]='images/randomimages/12.jpg';
MyImages[12]='images/randomimages/13.jpg';
MyImages[13]='images/randomimages/14.jpg';
MyImages[14]='images/randomimages/15.jpg';
 

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