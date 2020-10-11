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

  textArticle[0] = 'History has confirmed Charles & Ray Eames as amongst the most influential creative partnerships of the twentieth century, their rational yet playfully eloquent designs emblematic of post-war optimism, yet robustly grounded in democratic pragmatism. Crucial to their evolution as designers were the experimental plywood sculptures and objects developed at their Venice, California, workshop in the early 1940s, of which the present sculpture, created in 1943 and exhibited at New York’s Museum of Modern Art the following year, is the definitive representation. Of biomorphic form and choreographed profile, the sculpture unites the parallel narratives of fine art, sculpture and industrial design. Ray Eames, a painter and sculptress, trained under Hans Hofmann, and her husband Charles, who during this period was developing plywood structures and components for the U.S. Navy and the military aviation industry, were here able to synthesise their talents to create a work of outstanding technological and aesthetic importance';
  textArticle[1] = 'The present sculpture, whilst superficially appearing to have been constructed from a single sheet of plywood that simply was cut and molded, was in fact the consequence of an extensively laborious hand-crafted process. This commenced with the cross-layering of extremely thin plies of wood, glued and heat-sealed utilizing the Eames’ self-built molds to ensure that sufficient and even pressure was maintained throughout the four-to-six hour molding process. Careful examination of the edges of this sculpture reveal that the laminate thickness varies from twelve to eight laminations, corresponding with the regions of the sculpture that were to either remain rigid and robust, such as the legs, or were to be subject to more complex curvature.';
  textArticle[2] = 'Eero Saarinen met Charles Eames. Together they experimented on new furniture forms and produced the first designs for furniture made from moulded plywood. In 1940, they submitted the Organic Chair as a joint entry to the “Organic Design in Home Furnishings” competition held by the Museum of Modern Art in New York.';
  textArticle[3] = 'The Bauhaus became famous for its approach to design, which attempted to unify the principles of mass production with individual artistic vision and strove to combine aesthetics with everyday function.';
  textArticle[4] = 'A delightful object for adults and children alike, the Eames Elephant (1945) developed out of the Eameses’ fascination with elephants. They designed the original elephant out of molded plywood, but fabrication methods proved too complex, and it never went into production.';
  textArticle[5] = 'In September 1958, the United States Information Agency appointed George Nelson as chief designer of “The American National Exhibition,” which was set to open in Moscow the following summer. Nelson brought in Charles and Ray Eames in November of that year to help. The Eames Office conceived a multiscreen film called “Glimpses of the U.S.A.” Because of the tight deadline, the film needed to rely heavily on stock footage. Charles asked Henry Luce, chair of Time-Life, for access to the media company’s vast archives. Luce agreed, on condition that Charles and Ray might one day return the favor. A year later, Luce commissioned the Eames Office to design three lobbies for the newly constructed Time-Life Building at Rockefeller Center: the main reception lobby on the 27th floor, and two smaller lobbies on the 28th and 29th floors. Every element of the floor-to-ceiling designs was produced by Herman Miller. Two of the project’s famous elements—a padded leather swivel chair and a series of small, solid wood stools—went into production as the Eames Executive Chair (aka the Time-Life Chair) and Eames Walnut Stools.';
  textArticle[6] = '"Why is it that today we are more concerned with the materials and design of a chair than with its covering or ornament? Why are we more concerned with the quality of the music than with the personal idiosyncrasies of the conductor? Why are the uniforms—the word itself becomes strange—so varied and differ so radically from those of former wars? Why are our houses being designed from the inside out rather than fitting the living to a predetermined style on the outside? Why indeed do we not only accept but also admire and feel intensely proud of the Jeep? A superb example of a healthy direction of thinking and feeling. In spite of prejudice and confusion we are becoming aware slowly of true and good and vital and therefore beautiful form. My interest in painting is the rediscovery of form through movement and balance and depth and light. Using this medium to recreate in a satisfying order my experiences of this world with a desire to increase our pleasure, expand our perceptions, enrich our lives."';
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  txt = createElement('p','');
  initialTxt = createElement('p', 'click anywhere');
  initialTxt.position(windowWidth/2, windowHeight/2)
  // imageMode(CENTER);
}

function draw() {
   
}

function mousePressed() {
    initialTxt.hide();
    let i = int(random(0,7));

    var icon = image(img[i], mouseX-40, mouseY-40, 100, 100); 
    var imgArticle = image(imageArticle[i], mouseX + 140, mouseY);
    
    txt.html(textArticle[i]);
    txt.position(mouseX+ random(180,550), mouseY - random(100, -250));

    // .resize(140, 0);  
    
    imgArticle.resize(160,0);  

}