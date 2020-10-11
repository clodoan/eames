var img = [];
var imageArticle = [];
var textArticle = [];
var canvas;
var txt;
var div;

function preload() {
  img[0] = loadImage('./images/icons/svg/00.svg');
  img[1] = loadImage('./images/icons/svg/01.svg');
  img[2] = loadImage('./images/icons/svg/02.svg');
  img[3] = loadImage('./images/icons/svg/03.png');
  img[4] = loadImage('./images/icons/svg/04.svg');
  img[5] = loadImage('./images/icons/svg/05.svg');
  img[6] = loadImage('./images/icons/svg/06.svg');

  imageArticle[0] = loadImage('./images/article/00.jpg');
  imageArticle[1] = loadImage('./images/article/01.jpg');
  imageArticle[2] = loadImage('./images/article/02.jpg');
  imageArticle[3] = loadImage('./images/article/03.jpg');
  imageArticle[4] = loadImage('./images/article/04.jpg');
  imageArticle[5] = loadImage('./images/article/05.jpg');
  imageArticle[6] = loadImage('./images/article/06.jpg');

  textArticle[0] = 'The designs of Charles and Ray Eames are an instantly recognisable, and Californian form of mid-century modernism, but an exhibition at the Barbican in London suggests a more ambivalent context for the pair’s work';
  textArticle[1] = 'The designs of Charles and Ray Eames are an instantly recognisable, and Californian form of mid-century modernism, but an exhibition at the Barbican in London suggests a more ambivalent context for the pair’s work';
  textArticle[2] = 'The designs of Charles and Ray Eames are an instantly recognisable, and Californian form of mid-century modernism, but an exhibition at the Barbican in London suggests a more ambivalent context for the pair’s work';
  textArticle[3] = 'The designs of Charles and Ray Eames are an instantly recognisable, and Californian form of mid-century modernism, but an exhibition at the Barbican in London suggests a more ambivalent context for the pair’s work';
  textArticle[4] = 'The designs of Charles and Ray Eames are an instantly recognisable, and Californian form of mid-century modernism, but an exhibition at the Barbican in London suggests a more ambivalent context for the pair’s work';
  textArticle[5] = 'The designs of Charles and Ray Eames are an instantly recognisable, and Californian form of mid-century modernism, but an exhibition at the Barbican in London suggests a more ambivalent context for the pair’s work';
  textArticle[6] = 'The designs of Charles and Ray Eames are an instantly recognisable, and Californian form of mid-century modernism, but an exhibition at the Barbican in London suggests a more ambivalent context for the pair’s work';
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);

  div = createElement('div');
  txt = createElement('p','');
//   imageMode(CENTER);
}


function draw() {
   
}

function mousePressed() {
    let i = int(random(0,7));
    var icon = image(img[i], mouseX, mouseY, 100, 100); 
    var imgArticle = image(imageArticle[i], mouseX + 200, mouseY);    

    txt.html(textArticle[i]);
    txt.position(mouseX+ random(100,450), mouseY);
}