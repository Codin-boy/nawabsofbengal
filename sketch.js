var speed,speed2,speed3,speed4,speed5,speed6,speed7,speed8,speed9,speed10,speed11,speed12,speed13,speed14,speed15,speed16,speed17,speed18,speed19,speed20,speed21;
var nawab1,nawab1Img;
var nawab2,nawab2Img;
var nawab3,nawab3Img;
var nawab5,nawab5Img;
var nawab6,nawab6Img;
var nawab7,nawab7Img;
var nawab8,nawab8Img;
var nawab10,nawab10Img;
var nawab11,nawab11Img;
var nawab13,nawab13Img;
var nawab14,nawab14Img;
var nawab15,nawab15Img;
var nawab16,nawab16Img;
var nawab17,nawab17Img;
var nawab18,nawab18Img;
var backgrImg;
var playSound;

function preload(){
  nawab1Img = loadImage("nawab1.jpg")
  nawab2Img = loadImage("nawab2.jpg")
  nawab3Img = loadImage("nawab3.jpg")
  nawab5Img = loadImage("nawab5.jpg")
  nawab6Img = loadImage("nawab6.jpg")
  nawab7Img = loadImage("nawab7.jpg")
  nawab8Img = loadImage("nawab8.jpg")
  nawab10Img = loadImage("nawab10.jpg")
  nawab11Img = loadImage("nawab11.jpg")
  nawab13Img = loadImage("nawab13.jpg")
  nawab14Img = loadImage("nawab14.jpg")
  nawab15Img = loadImage("nawab15.jpg")
  nawab16Img = loadImage("nawab16.jpg")
  nawab17Img = loadImage("nawab17.jpg")
  nawab18Img = loadImage("nawab18.jpg")
  backgrImg = loadImage("backgr.png")
  playSound = loadSound("sound.mp3")
}

function setup(){
  createCanvas(3000,1000);

  speed = createSprite(1,1,20,20)
  speed.velocityX=5
  speed.visible=false
  speed2 = createSprite(1,1,20,20)
  speed2.visible=false
  speed3 = createSprite(1,1,20,20)
  speed3.visible=false
  speed4 = createSprite(1,1,20,20)
  speed4.visible=false
  speed5 = createSprite(1,1,20,20)
  speed5.visible=false
  speed6 = createSprite(1,1,20,20)
  speed6.visible=false
  speed7 = createSprite(1,1,20,20)
  speed7.visible=false
  speed8 = createSprite(1,1,20,20)
  speed8.visible=false
  speed9 = createSprite(1,1,20,20)
  speed9.visible=false
  speed10 = createSprite(1,1,20,20)
  speed10.visible=false
  speed11 = createSprite(1,1,20,20)
  speed11.visible=false
  speed12 = createSprite(1,1,20,20)
  speed12.visible=false
  speed13 = createSprite(1,1,20,20)
  speed13.visible=false
  speed14 = createSprite(1,1,20,20)
  speed14.visible=false
  speed15 = createSprite(1,1,20,20)
  speed15.visible=false
  speed16 = createSprite(1,1,20,20)
  speed16.visible=false
  speed17 = createSprite(1,1,20,20)
  speed17.visible=false
  speed18 = createSprite(1,1,20,20)
  speed18.visible=false
  speed19 = createSprite(1,1,20,20)
  speed19.visible=false
  speed20 = createSprite(1,1,20,20)
  speed20.visible=false
  speed21 = createSprite(1,1,20,20)
  speed21.visible=false
 
  nawab1 = createSprite(1,400,20,20);
  nawab1.scale=0.5
  nawab1.addImage(nawab1Img);
  nawab1.visible=false

  nawab2 = createSprite(1,400,20,20);
  nawab2.addImage(nawab2Img);
  nawab2.scale=0.5
  nawab2.visible=false

  nawab3 = createSprite(1,400,70,40);
  nawab3.addImage(nawab3Img);
  nawab3.visible=false

  nawab5 = createSprite(1,400,70,40);
  nawab5.addImage(nawab5Img);
  nawab5.visible=false

  nawab6 = createSprite(1,400,70,40);
  nawab6.addImage(nawab6Img);
  nawab6.visible=false

  nawab7 = createSprite(1,400,70,40);
  nawab7.addImage(nawab7Img);
  nawab7.visible=false

  nawab8 = createSprite(1,400,70,40);
  nawab8.addImage(nawab8Img);
  nawab8.visible=false

  nawab10 = createSprite(1,400,70,40);
  nawab10.addImage(nawab10Img);
  nawab10.visible=false

  nawab11 = createSprite(1,400,70,40);
  nawab11.addImage(nawab11Img);
  nawab11.visible=false

  nawab13 = createSprite(1,400,70,40);
  nawab13.addImage(nawab13Img);
  nawab13.visible=false

  nawab14= createSprite(1,400,70,40);
  nawab14.addImage(nawab14Img);
  nawab14.visible=false

  nawab15= createSprite(1,400,70,40);
  nawab15.addImage(nawab15Img);
  nawab15.visible=false

  nawab16= createSprite(1,400,70,40);
  nawab16.addImage(nawab16Img);
  nawab16.visible=false

  nawab17 = createSprite(1,400,70,40);
  nawab17.addImage(nawab17Img);
  nawab17.visible=false

  nawab18 = createSprite(1,400,70,40);
  nawab18.addImage(nawab18Img);
  nawab18.visible=false

}
function draw(){
  background("orange")

   
  if(speed.x<1400){
  textSize(40)
  text("Hi! I am going to show you all the Nawabs of Bengal",200,300)
  textSize(40)
  text("Murshid Quli Khan-Mansur Ali Khan",400,350)
  textSize(40)
  text("1717-1880",500,400)

  }

    if(nawab1.x>2){
      nawab1.visible=true
    }

    if(nawab2.x>2){
      nawab2.visible=true
    }

    if(nawab3.x>2){
      nawab3.visible=true
    }

    if(nawab5.x>2){
      nawab5.visible=true
    }

    if(nawab6.x>2){
      nawab6.visible=true
    }

    if(nawab7.x>2){
      nawab7.visible=true
    }

    if(nawab8.x>2){
      nawab8.visible=true
    }

    if(nawab10.x>2){
      nawab10.visible=true
    }

    if(nawab11.x>2){
      nawab11.visible=true
    }

    if(nawab13.x>2){
      nawab13.visible=true
    }

    if(nawab14.x>2){
      nawab14.visible=true
    }


    if(nawab15.x>2){
      nawab15.visible=true
    }

    if(nawab16.x>2){
      nawab16.visible=true
    }

    if(nawab17.x>2){
      nawab17.visible=true
    }

    if(nawab18.x>2){
      nawab18.visible=true
    }
    

  if(speed.x>1400 && speed.x<2800){
    textSize(30)
  text("There were 3 dynasties",600,100)
  text("Nasiri Dynasty",100,350)
  text("Afshar dynasty",500,350)
  text("Najafi dynasty",1000,350)

  speed2.velocityX=5
  }
  

  if(speed2.x>1400 && speed2.x<2800){
   nawab1.velocityX=5;

   speed3.velocityX=5

   textSize(30)
   text("Nasiri Dynasty",600,100)
   
   textSize(50)
   text("Murshid Quli Khan",500,200)
   
   textSize(30)
   text("Titular Name:Jaafar Khan Bahadur Nasiri",950,400)
   text("Born:1665",950,450)
   text("Reign as King:1717–1727",950,500)
   text("Death:June 1727",950,550)
  }

  if(speed3.x>1400 && speed3.x<2800 ){
    nawab2.velocityX=5

    speed4.velocityX=5

    textSize(30)
   text("Nasiri Dynasty",600,100)
   
   textSize(50)
   text("Sarfaraz Khan",550,200)
   
   textSize(30)
   text("Titular Name:Ala-ud-Din Haidar Jung",950,400)
   text("Born:After 1700",950,450)
   text("Reign as King:1727-1727 (for few days)",950,500)
   text("Death:29 April 1740",950,550)
  }
 
  if(speed4.x>1400 && speed4.x<2800){
    nawab3.velocityX=5
    nawab2.x=1;
    nawab2.visible=false

    speed5.velocityX=5

    textSize(30)
    text("Nasiri Dynasty",600,100)
    
    textSize(50)
    text("Shuja-ud-Din Muhammad Khan",500,200)
    
    textSize(30)
    text("Titular Name:Shuja ud-Daula",900,400)
    text("Born:circa 1670",900,450)
    text("Reign as King:1 July 1727 – 26 August 1739",900,500)
    text("Death:26 August 1739",900,550)

    text("*Meaning of circa-Approximately",100,900)
  }
    

  if(speed5.x>1400 && speed5.x<2800){
    nawab2.velocityX=5
    nawab2.visible=true
    
     speed6.velocityX=5

    textSize(30)
    text("Nasiri Dynasty",600,100)
   
    textSize(50)
    text("Sarfaraz Khan",550,200)
    
    textSize(30)
    text("Titular Name:Ala-ud-Din Haidar Jung",950,400)
    text("Born:After 1700",950,450)
    text("Reign as King:1727-1727 (for few days)",950,500)
    text("Death:29 April 1740",950,550)
    
    textSize(20)
    text("*Sarfaraz Khan was made Nawab of Bengal again",150,900)
    speed7.velocityX=5
  }


  if(speed7.x>1400 && speed7.x<2800){
    nawab5.velocityX=5

    speed8.velocityX=5

    textSize(30)
    text("Afshar dynasty",600,100)
   
    textSize(50)
    text("Alivardi Khan",550,200)
    
    textSize(30)
    text("Titular Name:Hashim ud-Daula",950,400)
    text("Born:Before 10 May 1671",950,450)
    text("Reign as King:29 April 1740 – 9 April 1756",950,500)
    text("Death:9 April 1756",950,550)
    
    textSize(10)
    text("*Dynasty Changed*",100,900)
  }

  if(speed8.x>1400 && speed8.x<2800){
    nawab6.velocityX=5
    
    speed9.velocityX=05

    textSize(30)
    text("Afshar dynasty",600,100)
   
    textSize(50)
    text("Siraj ud-Daulah",550,200)
    
    textSize(30)
    text("Titular Name:	Siraj ud-Daulah",950,400)
    text("Born:1733",950,450)
    text("Reign as King:9 April 1756 – 23 June 1757",950,500)
    text("Death:2 July 1757",950,550)
  }

  if(speed9.x>1400 && speed9.x<2800){
      nawab7.velocityX=5

      speed10.velocityX=5
      
      textSize(30)
    text("Najafi dynasty",600,100)
   
    textSize(50)
    text("Mir Jafar",550,200)
    
    textSize(30)
    text("Titular Name:	Ja'afar 'Ali Khan Bahadur",900,400)
    text("Born:1691",900,450)
    text("Reign as King:2 June 1757 – 20 October 1760",900,500)
    text("Death:17 January 1765",900,550)

    text("*After the Battle Of Plassey Mir Jafar was made king",100,700)
  }

  if(speed10.x>1400 && speed10.x<2800){
    nawab8.velocityX=5
    nawab7.x=1
    nawab7.visible=false

    textSize(30)
    text("Najafi dynasty",600,100)
   
    textSize(50)
    text("Mir Qasim",550,200)
    
    textSize(30)
    text("Titular Name: Itimad ud-Daulah",900,400)
    text("Born:UNKNOWN",900,450)
    text("Reign as King:20 October 1760 – 7 July 1763",900,500)
    text("Death:8 May 1777",900,550)

    speed11.velocityX=5
}

if(speed11.x>1400 && speed11.x<2800){
  
  nawab7.velocityX=5
  nawab7.visible=true

  speed12.velocityX=5

  textSize(30)
  text("Najafi dynasty",600,100)
 
  textSize(50)
  text("Mir Jafar",550,200)
  
  textSize(30)
  text("Titular Name:	Ja'afar 'Ali Khan Bahadur",900,400)
  text("Born:1691",900,450)
  text("Reign as King:2 June 1757 – 20 October 1760",900,500)
  text("Death:17 January 1765",900,550)
}

if(speed12.x>1400 && speed12.x<2800){
  nawab10.velocityX=5
  
  textSize(30)
  text("Najafi dynasty",600,100)
 
  textSize(50)
  text("Najmuddin Ali Khan",550,200)
  
  textSize(30)
  text("Titular Name:Najm ud-Daulah",900,400)
  text("Born:1750",900,450)
  text("Reign as King:5 February 1765 – 8 May 1766",900,500)
  text("Death:8 May 1766",900,550)

  speed13.velocityX=5
}

if(speed13.x>1400 && speed13.x<2800){
  nawab11.velocityX=5

  speed14.velocityX=5

  textSize(30)
  text("Najafi dynasty",600,100)
 
  textSize(50)
  text("Najabut Ali Khan",550,200)
  
  textSize(30)
  text("Titular Name:Saif ud-Daulah",900,400)
  text("Born:1749",900,450)
  text("Reign as King:22 May 1766 – 10 March 1770",900,500)
  text("Death:10 March 1770",900,550)
}

if(speed14.x>1400 && speed14.x<2800){
  
  speed15.velocityX=5

  textSize(30)
  text("Najafi dynasty",600,100)
 
  textSize(50)
  text("Ashraf Ali Khan",550,200)
  
  textSize(30)
  text("Titular Name:Saif ud-Daulah",900,400)
  text("Born:Before 1759",900,450)
  text("Reign as King:10 March 1770 – 24 March 1770",900,500)
  text("Death:24 March 1770",900,550)
  
  textSize(10)
  text("I didn't get the photo",100,700)
}

if(speed15.x>1400 && speed15.x<2800){
  nawab13.velocityX=5

  speed16.velocityX=5

  textSize(30)
  text("Najafi dynasty",600,100)
 
  textSize(50)
  text("Mubarak Ali Khan",550,200)
  
  textSize(30)
  text("Titular Name:	Mubarak ud-Daulah",900,400)
  text("Born:1759",900,450)
  text("Reign as King:1793 – 28 April 1810",900,500)
  text("Death:28 April 1810",900,550)
}

if(speed16.x>1400 && speed16.x<2800){
  nawab14.velocityX=5

  speed17.velocityX=5

  textSize(30)
  text("Najafi dynasty",600,100)
 
  textSize(50)
  text("Baber Ali Khan",550,200)
  
  textSize(30)
  text("Titular Name:Azud ud-Daulah",900,400)
  text("Born:UNKNOWN",900,450)
  text("Reign as King:1793 – 28 April 1810",900,500)
  text("Death:28 April 1810",900,550)
}

if(speed17.x>1400 && speed17.x<2800){
  nawab15.velocityX=5

  speed18.velocityX=5

  textSize(30)
  text("Najafi dynasty",600,100)
 
  textSize(50)
  text("Zain-ud-Din Ali Khan",550,200)
  
  textSize(30)
  text("Titular Name:Ali Jah",900,400)
  text("Born:UNKNOWN",900,450)
  text("Reign as King:5 June 1810 – 6 August 1821",900,500)
  text("Death:6 August 1821",900,550)
}

if(speed18.x>1400 && speed18.x<2800){
  nawab16.velocityX=5

  speed19.velocityX=5

  textSize(30)
  text("Najafi dynasty",600,100)
 
  textSize(50)
  text("Ahmad Ali Khan",550,200)
  
  textSize(30)
  text("Titular Name:Walla Jah",900,400)
  text("Born:UNKNOWN",900,450)
  text("Reign as King:	1821 – 30 October 1824",900,500)
  text("Death:30 October 1824",900,550)
}

if(speed19.x>1400 && speed19.x<2800){
  nawab17.velocityX=5

  speed20.velocityX=5

  textSize(30)
  text("Najafi dynasty",600,100)
 
  textSize(50)
  text("Mubarak Ali Khan II",550,200)
  
  textSize(30)
  text("Titular Name:Humayun Jah",900,400)
  text("Born:29 September 1810",900,450)
  text("Reign as King:1824 – 3 October 1838",900,500)
  text("Death:3 October 1838",900,550)  
}

if(speed20.x>1400 && speed20.x<2800){
  nawab18.velocityX=5

  speed21.velocityX=5

  textSize(30)
  text("Najafi dynasty",600,100)
 
  textSize(50)
  text("Mansur Ali Khan",550,200)
  
  textSize(30)
  text("Titular Name:Feradun Jah",800,400)
  text("Born:29 October 1830",800,450)
  text("Reign as King:29 October 1838 – 1 November 1880 (abdicated)	",800,500)
  text("Death:5 November 1884",800,550)  
}

if(speed21.x>1400 && speed21.x<2800){

  
  textSize(100)
  text("Thanks for watching",100,100) 
 
}


  drawSprites();
}
