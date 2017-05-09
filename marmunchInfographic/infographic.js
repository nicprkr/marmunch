//MONTH VARIABLES
                var jan = document.getElementById("jan");
                var feb = document.getElementById("feb");
                var mar = document.getElementById("mar");
                var apr = document.getElementById("apr");
                var may = document.getElementById("may");
                var june = document.getElementById("june");
                var july = document.getElementById("july");
                var aug = document.getElementById("aug");
                var sept = document.getElementById("sept");
                var oct = document.getElementById("oct");
                var nov = document.getElementById("nov");
                var dec = document.getElementById("dec");
                
                //CITY VARIABLE
                var sBC = document.getElementById("sBC");
                var oka = document.getElementById("Oka");
                var koot = document.getElementById("koot");
                var nBC = document.getElementById("nBC");
                var van = document.getElementById("van");
                
                //ARRAYS
                
                //SouthBC arrays
                var janSBC = ["PNGs/carrot.png", "PNGs/kale.png", "PNGs/leeks.png", "PNGs/onion.png"];
                var febSBC = ["PNGs/kale.png", "PNGs/leeks.png", "PNGs/mushroom.png", "PNGs/apple.png"];
                var marSBC =["PNGs/leeks.png", "PNGs/mushroom.png", "PNGs/kale.png", "PNGs/apple.png"];
                var aprSBC = ["PNGs/kale.png", "PNGs/mushroom.png", "PNGs/radish.png", "PNGs/spinach.png"];
                var maySBC = ["PNGs/asparagus.png", "PNGs/celery.png", "PNGs/mushroom.png", "PNGs/kale.png"];
                var juneSBC = ["PNGs/asparagus.png", "PNGs/mushroom.png", "PNGs/carrot.png", "PNGs/garlic.png"];
                var julySBC = ["PNGs/blueberry.png", "PNGs/celery.png", "PNGs/carrot.png", "PNGs/cucumber.png"];
                var augSBC = ["PNGs/apple.png", "PNGs/blueberry.png", "PNGs/celery.png", "PNGs/carrot.png"];
                var septSBC = ["PNGs/potato.png", "PNGs/cucumber.png", "PNGs/carrot.png", "PNGs/cabbage.png"];
                var octSBC = ["PNGs/carrot.png", "PNGs/potato.png", "PNGs/cabbage.png", "PNGs/apple.png"];
                var novSBC = ["PNGs/kale.png", "PNGs/leeks.png", "PNGs/carrot.png", "PNGs/cabbage.png"];
                var decSBC = ["PNGs/kale.png", "PNGs/apple.png", "PNGs/leeks.png", "PNGs/carrot.png"];
                
                //Okanagan arrays
                var janOka = ["PNGs/garlic.png", "PNGs/kale.png", "PNGs/leeks.png", "PNGs/cabbage.png"];
                var febOka = ["PNGs/cabbage.png", "PNGs/leeks.png", "PNGs/garlic.png", "PNGs/kale.png"];
                var marOka =["PNGs/kale.png", "PNGs/garlic.png", "PNGs/cabbage.png", "PNGs/leeks.png"];
                var aprOka = ["PNGs/asparagus.png", "PNGs/garlic.png", "PNGs/apple.png", "PNGs/leeks.png"];
                var mayOka = ["PNGs/asparagus.png", "PNGs/apple.png", "PNGs/lettuce.png", "PNGs/garlic.png"];
                var juneOka = ["PNGs/carrot.png", "PNGs/corn.png", "PNGs/kale.png", "PNGs/blueberry.png"];
                var julyOka = ["PNGs/garlic.png", "PNGs/kale.png", "PNGs/carrot.png", "PNGs/cabbage.png"];
                var augOka = ["PNGs/cabbage.png", "PNGs/cucumber.png", "PNGs/garlic.png", "PNGs/carrot.png"];
                var septOka = ["PNGs/apple.png", "PNGs/grapes.png", "PNGs/carrot.png", "PNGs/cabbage.png"];
                var octOka = ["PNGs/carrot.png", "PNGs/apple.png", "PNGs/grapes.png", "PNGs/kiwi.png"];
                var novOka = ["PNGs/garlic.png", "PNGs/kale.png", "PNGs/leeks.png", "PNGs/cabbage.png"];
                var decOka = ["PNGs/cabbage.png", "PNGs/kiwi.png", "PNGs/garlic.png", "PNGs/kale.png"];
                
                //Kootney arrays
                var janKoot = ["PNGs/apple.png", "PNGs/arugula.png", "PNGs/carrot.png", "PNGs/cabbage.png"];
                var febKoot = ["PNGs/cabbage.png", "PNGs/apple.png", "PNGs/garlic.png", "PNGs/carrot.png"];
                var marKoot =["PNGs/onion.png", "PNGs/potato.png", "PNGs/arugula.png", "PNGs/apple.png"];
                var aprKoot = ["PNGs/arugula.png", "PNGs/leeks.png", "PNGs/carrot.png", "PNGs/mushroom.png"];
                var mayKoot = ["PNGs/potato.png", "PNGs/apple.png", "PNGs/arugula.png", "PNGs/asparagus.png"];
                var juneKoot = ["PNGs/potato.png", "PNGs/apple.png", "PNGs/lettuce.png", "PNGs/asparagus.png"];
                var julyKoot = ["PNGs/blueberry.png", "PNGs/beet.png", "PNGs/carrot.png", "PNGs/cucumber.png"];
                var augKoot = ["PNGs/apple.png", "PNGs/arugula.png", "PNGs/corn.png", "PNGs/carrot.png"];
                var septKoot = ["PNGs/kale.png", "PNGs/mushroom.png", "PNGs/leeks.png", "PNGs/cabbage.png"];
                var octKoot = ["PNGs/kale.png", "PNGs/leeks.png", "PNGs/lettuce.png", "PNGs/potato.png"];
                var novKoot = ["PNGs/arugula.png", "PNGs/potato.png", "PNGs/mushroom.png", "PNGs/cabbage.png"];
                var decKoot = ["PNGs/kale.png", "PNGs/arugula.png", "PNGs/potato.png", "PNGs/mushroom.png"];
                
                //North BC arrays
                var janNBC = ["PNGs/apple.png", "PNGs/onion.png", "PNGs/carrot.png", "PNGs/cabbage.png"];
                var febNBC = ["PNGs/apple.png", "PNGs/onion.png", "PNGs/carrot.png", "PNGs/mushroom.png"];
                var marNBC =["PNGs/carrot.png", "PNGs/apple.png", "PNGs/honey.png", "PNGs/potato.png"];
                var aprNBC = ["PNGs/carrot.png", "PNGs/apple.png", "PNGs/honey.png", "PNGs/potato.png"];
                var mayNBC = ["PNGs/honey.png", "PNGs/beet.png", "PNGs/carrot.png", "PNGs/potato.png"];
                var juneNBC = ["PNGs/beet.png", "PNGs/potato.png", "PNGs/rutabaga.png", "PNGs/wholeGrains.png"];
                var julyNBC = ["PNGs/potato.png", "PNGs/wholeGrains.png"];
                //var augNBC = ["cabbage.png", "berry.png", "flower.png", "carrot.png"];
               // var septNBC = ["flower.png", "berry.png", "carrot.png", "cabbage.png"];
                var octNBC = ["PNGs/corn.png", "PNGs/garlic.png", "PNGs/honey.png", "PNGs/turnip.png"];
                var novNBC = ["PNGs/apple.png", "PNGs/onion.png", "PNGs/carrot.png", "PNGs/cabbage.png"];
                var decNBC = ["PNGs/onion.png", "PNGs/apple.png", "PNGs/cabbage.png", "PNGs/carrot.png"];
                
                //Vancouver arrays
                var janVan = ["PNGs/kiwi.png", "PNGs/leeks.png", "PNGs/carrot.png", "PNGs/kale.png"];
                var febVan = ["PNGs/kale.png", "PNGs/leeks.png", "PNGs/onion.png"];
                var marVan =["PNGs/kale.png", "PNGs/onion.png"];
                var aprVan = ["PNGs/kale.png", "PNGs/onion.png", "PNGs/asparagus.png"];
                var mayVan = ["PNGs/potato.png","PNGs/kale.png", "PNGs/onion.png", "PNGs/asparagus.png"];
                var juneVan = ["PNGs/carrot.png", "PNGs/beet.png", "PNGs/onion.png", "PNGs/lettuce.png"];
                var julyVan = ["PNGs/carrot.png", "PNGs/beet.png", "PNGs/onion.png", "PNGs/cucumber.png"];
                var augVan = ["PNGs/cabbage.png", "PNGs/blueberry.png", "PNGs/apple.png", "PNGs/carrot.png"];
                var septVan = ["PNGs/apple.png", "PNGs/blueberry.png", "PNGs/carrot.png", "PNGs/cabbage.png"];
                var octVan = ["PNGs/carrot.png", "PNGs/apple.png", "PNGs/cabbage.png", "PNGs/kiwi.png"];
                var novVan = ["PNGs/kiwi.png", "PNGs/potato.png", "PNGs/carrot.png", "PNGs/cabbage.png"];
                var decVan = ["PNGs/kiwi.png", "PNGs/rutabaga.png", "PNGs/carrot.png", "PNGs/cabbage.png"];
                
                //CLICK VAR
                
                //months
                var janClick = false;
                var febClick = false;
                var marClick = false;
                var aprClick = false;
                var mayClick = false;
                var juneClick = false;
                var julyClick = false;
                var augClick = false;
                var septClick = false;
                var octClick = false;
                var novClick = false;
                var decClick = false;
                
                //cities
                var vanClick = false;
                var sBCClick = false;
                var okaClick = false;
                var kootClick = false;
                var nBCClick = false;
                
                //food
                var food = document.getElementById("food");
                var foodDiv = document.getElementById("foodDiv");
                
                
                //CLICK FUNCTIONS 
                
                //months
                jan.addEventListener("click", function(){
                    console.log("January");
                    janClick = true;
                    
                    //$('#path1').css({ fill: "#ff0000" });
                    
                    //$('#jan').css({fill: "#DD287A"});
                    
                    //jan.style.fill = '#DD287A';
                    
                    showFood();
                });
                
                feb.addEventListener("click", function(){
                    console.log("Feb");
                    febClick = true;
                    
                    showFood();
                });
                
                mar.addEventListener("click", function(){
                    console.log("March");
                    marClick = true;
                    
                    showFood();
                });
                
                apr.addEventListener("click", function(){
                    console.log("April");
                    aprClick = true;
                    
                    apr.style.fill = '#DD287A';
                    
                    //$('#apr').css({fill: "#DD287A"});
                    
                    showFood();
                });
                
                may.addEventListener("click", function(){
                    console.log("May");
                    mayClick = true;
                    
                   showFood();
                });
                
                june.addEventListener("click", function(){
                    console.log("June");
                    juneClick = true;
                    
                    showFood();
                });
                
                july.addEventListener("click", function(){
                    console.log("July");
                    julyClick = true;
                    
                    showFood();
                });
                
                aug.addEventListener("click", function(){
                    console.log("August");
                    augClick = true;
                    
                    showFood();
                });
                
                sept.addEventListener("click", function(){
                    console.log("September");
                    septClick = true;
                    
                    showFood();
                });
                
                oct.addEventListener("click", function(){
                    console.log("October");
                    octClick = true;
                    
                    showFood();
                });
                
                nov.addEventListener("click", function(){
                    console.log("November");
                    novClick = true;
                    
                    showFood();
                })
                
                dec.addEventListener("click", function(){
                    console.log("December");
                    decClick = true;
                    
                    showFood();
                })
                
                
                //cities
                 sBC.addEventListener("click", function(){
                    console.log("South BC");
                    sBCClick = true;
                    
                    food.innerHTML = "";
                    
                    showFood();
                });
                
                oka.addEventListener("click", function(){
                    console.log("Okanagan");
                    okaClick = true;
                    
                    food.innerHTML="";
                    
                    showFood();
                });
                
                koot.addEventListener("click", function(){
                    console.log("Kootneys");
                    kootClick = true;
                    
                    food.innerHTML="";
                    
                    showFood();
                })
                
                nBC.addEventListener("click", function(){
                    console.log("North BC");
                    nBCClick = true;
                    
                    food.innerHTML=""
                    
                    showFood();
                })
                
                van.addEventListener("click", function(){
                    console.log("Vancouver");
                    vanClick = true;
                    
                    food.innerHTML = "";
                    
                    showFood();
                    
                });
                
               
                
                
                
                //FUNCTIONS
                function showFood(){
                    
                    //southBC
                    if(sBCClick && janClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = janSBC[i];
                            food.appendChild(nImg);
                        }
                        
                        sBCClick = false;
                        janClick = false;
                    };
                    
                    if(sBCClick && febClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = febSBC[i];
                            food.appendChild(nImg);
                        }
                        
                        sBCClick = false;
                        febClick = false;
                    };
                    
                      if(sBCClick && marClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = marSBC[i];
                            food.appendChild(nImg);
                        }
                        
                        sBCClick = false;
                        marClick = false;
                    };
                    
                      if(sBCClick && aprClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = aprSBC[i];
                            food.appendChild(nImg);
                        }
                        
                        sBCClick = false;
                        aprClick = false;
                    };
                    
                      if(sBCClick && mayClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = maySBC[i];
                            food.appendChild(nImg);
                        }
                        
                        sBCClick = false;
                        mayClick = false;
                    };
                    
                      if(sBCClick && juneClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = juneSBC[i];
                            food.appendChild(nImg);
                        }
                        
                        sBCClick = false;
                        juneClick = false;
                    };
                    
                      if(sBCClick && julyClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = julySBC[i];
                            food.appendChild(nImg);
                        }
                        
                        sBCClick = false;
                        julyClick = false;
                    };
                    
                      if(sBCClick && augClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = augSBC[i];
                            food.appendChild(nImg);
                        }
                        
                        sBCClick = false;
                        augClick = false;
                    };
                    
                      if(sBCClick && septClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = septSBC[i];
                            food.appendChild(nImg);
                        }
                        
                        sBCClick = false;
                        septClick = false;
                    };
                    
                      if(sBCClick && octClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = octSBC[i];
                            food.appendChild(nImg);
                        }
                        
                        sBCClick = false;
                        octClick = false;
                    };
                    
                      if(sBCClick && novClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = novSBC[i];
                            food.appendChild(nImg);
                        }
                        
                        sBCClick = false;
                        novClick = false;
                    };
                    
                      if(sBCClick && decClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = decSBC[i];
                            food.appendChild(nImg);
                        }
                        
                        sBCClick = false;
                        decClick = false;
                    };

                    //Okanagan
                    if(okaClick && janClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = janOka[i];
                            food.appendChild(nImg);
                        }
                        
                        okaClick = false;
                        janClick = false;
                    };
                    
                    if(okaClick && febClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = febOka[i];
                            food.appendChild(nImg);
                        }
                        
                        okaClick = false;
                        febClick = false;
                    };
                    
                    if(okaClick && marClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = marOka[i];
                            food.appendChild(nImg);
                        }
                        
                        okaClick = false;
                        marClick = false;
                    };
                    
                    if(okaClick && aprClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = aprOka[i];
                            food.appendChild(nImg);
                        }
                        
                        okaClick = false;
                        aprClick = false;
                    };
                    
                    if(okaClick && mayClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = mayOka[i];
                            food.appendChild(nImg);
                        }
                        
                        okaClick = false;
                        mayClick = false;
                    };
                    
                    if(okaClick && juneClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = juneOka[i];
                            food.appendChild(nImg);
                        }
                        
                        okaClick = false;
                        juneClick = false;
                    };
                    
                    if(okaClick && julyClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = julyOka[i];
                            food.appendChild(nImg);
                        }
                        
                        okaClick = false;
                        julyClick = false;
                    };
                    
                    if(okaClick && augClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = augOka[i];
                            food.appendChild(nImg);
                        }
                        
                        okaClick = false;
                        augClick = false;
                    };
                    
                    if(okaClick && septClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = septOka[i];
                            food.appendChild(nImg);
                        }
                        
                        okaClick = false;
                        septClick = false;
                    };
                    
                    if(okaClick && octClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = octOka[i];
                            food.appendChild(nImg);
                        }
                        
                        okaClick = false;
                        octClick = false;
                    };
                    
                    if(okaClick && novClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = novOka[i];
                            food.appendChild(nImg);
                        }
                        
                        okaClick = false;
                        novClick = false;
                    };
                    
                    if(okaClick && decClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = decOka[i];
                            food.appendChild(nImg);
                        }
                        
                        okaClick = false;
                        decClick = false;
                    };
                    
                    //Kootneys
                    if(kootClick && janClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = janKoot[i];
                            food.appendChild(nImg);
                        }
                        
                        kootClick = false;
                        janClick = false;
                    };
                    
                    if(kootClick && febClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = febKoot[i];
                            food.appendChild(nImg);
                        }
                        
                        kootClick = false;
                        febClick = false;
                    };
                    
                    if(kootClick && marClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = marKoot[i];
                            food.appendChild(nImg);
                        }
                        
                        kootClick = false;
                        marClick = false;
                    };
                    
                    if(kootClick && aprClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = aprKoot[i];
                            food.appendChild(nImg);
                        }
                        
                        kootClick = false;
                        aprClick = false;
                    };
                    
                    if(kootClick && mayClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = mayKoot[i];
                            food.appendChild(nImg);
                        }
                        
                        kootClick = false;
                        mayClick = false;
                    };
                    
                    if(kootClick && juneClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = juneKoot[i];
                            food.appendChild(nImg);
                        }
                        
                        kootClick = false;
                        juneClick = false;
                    };
                    
                    if(kootClick && julyClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = julyKoot[i];
                            food.appendChild(nImg);
                        }
                        
                        kootClick = false;
                        julyClick = false;
                    };
                    
                    if(kootClick && augClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = augKoot[i];
                            food.appendChild(nImg);
                        }
                        
                        kootClick = false;
                        augClick = false;
                    };
                    
                    if(kootClick && septClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = septKoot[i];
                            food.appendChild(nImg);
                        }
                        
                        kootClick = false;
                        septClick = false;
                    };
                    
                    if(kootClick && octClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = octKoot[i];
                            food.appendChild(nImg);
                        }
                        
                        kootClick = false;
                        octClick = false;
                    };
                    
                    if(kootClick && novClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = novKoot[i];
                            food.appendChild(nImg);
                        }
                        
                        kootClick = false;
                        novClick = false;
                    };
                    
                    if(kootClick && decClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = decKoot[i];
                            food.appendChild(nImg);
                        }
                        
                        kootClick = false;
                        decClick = false;
                    };
                    
                    //North BC
                    if(nBCClick && janClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = janNBC[i];
                            food.appendChild(nImg);
                        }
                        
                        nBCClick = false;
                        janClick = false;
                    };
                    
                    if(nBCClick && febClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = febNBC[i];
                            food.appendChild(nImg);
                        }
                        
                        nBCClick = false;
                        febClick = false;
                    };
                    
                    if(nBCClick && marClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = marNBC[i];
                            food.appendChild(nImg);
                        }
                        
                        nBCClick = false;
                        marClick = false;
                    };
                    
                    if(nBCClick && aprClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = aprNBC[i];
                            food.appendChild(nImg);
                        }
                        
                        nBCClick = false;
                        aprClick = false;
                    };
                    
                    if(nBCClick && mayClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = mayNBC[i];
                            food.appendChild(nImg);
                        }
                        
                        nBCClick = false;
                        mayClick = false;
                    };
                    
                    if(nBCClick && juneClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = juneNBC[i];
                            food.appendChild(nImg);
                        }
                        
                        nBCClick = false;
                        juneClick = false;
                    };
                    
                    if(nBCClick && julyClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = julyNBC[i];
                            food.appendChild(nImg);
                        }
                        
                        nBCClick = false;
                        julyClick = false;
                    };
                    
                    if(nBCClick && augClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = augNBC[i];
                            food.appendChild(nImg);
                        }
                        
                        nBCClick = false;
                        augClick = false;
                    };
                    
                    if(nBCClick && septClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = septNBC[i];
                            food.appendChild(nImg);
                        }
                        
                        nBCClick = false;
                        septClick = false;
                    };
                    
                    if(nBCClick && octClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = octNBC[i];
                            food.appendChild(nImg);
                        }
                        
                        nBCClick = false;
                        octClick = false;
                    };
                    
                    if(nBCClick && novClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = novNBC[i];
                            food.appendChild(nImg);
                        }
                        
                        nBCClick = false;
                        novClick = false;
                    };
                    
                    if(nBCClick && decClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = decNBC[i];
                            food.appendChild(nImg);
                        }
                        
                        nBCClick = false;
                        decClick = false;
                    };
                    
                    //vancouver
                    if(vanClick && janClick === true){
                        for (var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = janVan[i];
                            food.appendChild(nImg);
                        }
                        
                        vanClick = false;
                        janClick = false;
                    };
                    
                    if(vanClick && febClick === true){
                        for (var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = febVan[i];
                            food.appendChild(nImg);
                        }
                        
                        vanClick = false;
                        febClick = false;
                    };
                    
                    if(vanClick && marClick === true){
                        for (var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = marVan[i];
                            food.appendChild(nImg);
                        }
                        
                        vanClick = false;
                        marClick = false;
                    };
                    
                    if(vanClick && aprClick === true){ 
                        for (var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = aprVan[i];
                            food.appendChild(nImg);
                        }
                        
                        vanClick = false;
                        aprClick = false;
                    };
                    
                    if(vanClick && mayClick === true){
                       for (var i = 0; i < 4; i++){
                           var nImg = document.createElement("img");
                           nImg.src = mayVan[i];
                           food.appendChild(nImg);
                       } ;
                        
                        vanClick = false;
                        mayClick = false;
                    };
                    
                    if(vanClick && juneClick === true){
                        for(var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = juneVan[i];
                            food.appendChild(nImg);
                        }
                        
                        vanClick = false;
                        juneClick = false;
                    };
                    
                    if(vanClick && julyClick === true){
                        for (var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = julyVan[i];
                            food.appendChild(nImg)
                        }
                        
                        vanClick = false;
                        julyClick = false;
                    };
                    
                    if(vanClick && augClick === true){
                        for (var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = augVan[i];
                            food.appendChild(nImg)
                        }
                        
                        vanClick = false;
                        augClick = false;
                    };
                    
                    if(vanClick && septClick === true){
                        for (var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = septVan[i];
                            food.appendChild(nImg)
                        }
                        
                        vanClick = false;
                        septClick = false;
                    };
                    
                    if(vanClick && octClick === true){
                        for (var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = octVan[i];
                            food.appendChild(nImg)
                        }
                        
                        vanClick = false;
                        octClick = false;
                    };
                    
                    if(vanClick && novClick === true){
                        for (var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = novVan[i];
                            food.appendChild(nImg)
                        }
                        
                        vanClick = false;
                        novClick = false;
                    };
                    
                    if(vanClick && decClick === true){
                        for (var i = 0; i < 4; i++){
                            var nImg = document.createElement("img");
                            nImg.src = decVan[i];
                            food.appendChild(nImg)
                        }
                        
                        vanClick = false;
                        decClick = false;
                    }
                    
                };
                
                /*
                
                function vanApr(){
                    
                    if(vanClick && aprClick === true){
                        var nImg = document.createElement("img");
                        nImg.src = "Codes/food.svg";
                        food.appendChild(nImg);
                    }   
                }
                */

 
                //Current time and location GOOGLE MAPS API
                
                 var uluru;
                
                //TIME
                var currentTime = document.getElementById("currentTime");
                
                var seconds = Date();
                currentTime.innerHTML = seconds;
                
                //LOCATION
                var currentLocation = document.getElementById("currentLocation");
                var toggle = false;
                
                var map;
                var infowindow;
                
                
                currentLocation.addEventListener("click", function(){            
                    if(toggle == false){
                        var nInput = document.createElement("input");
                        nInput.innerHTML = "";
                        
                        
                        currentLocation.appendChild(nInput);
                        toggle = true;
                        nInput.addEventListener('keyup', function(ev){
                            if(ev.keyCode === 13) {
                                var location = nInput.value;
                                displayMapStuff(location);
                            }
                        })
                    }
                    
                })
                
                function displayMapStuff(location) {
                    var locationURL = location.replace(/ /g , "+");
                    var searchURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + locationURL + '&key=AIzaSyBNLjk5gGki9P0RBp_stLEsY5jW-b0aVNw'
                     
                    $.getJSON(searchURL, function(data) {
                        var lat = data.results[0].geometry.location.lat;
                        var lng = data.results[0].geometry.location.lng;
                        console.log(lat);
                        console.log(lng);
                        var penis = {lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng};
                        
                        map = new google.maps.Map(document.getElementById('map'), {
                          center: penis,
                          zoom: 15
                        });
                        infowindow = new google.maps.InfoWindow();
                        var service = new google.maps.places.PlacesService(map);
                        service.nearbySearch({
                          location: penis,
                          radius: 5000,
                          type: ['market'],
                            keyword: 'farmer'
                        }, callback);
                      });
                }
                
                
                function callback(results, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                      for (var i = 0; i < results.length; i++) {
                          createMarker(results[i]);
                      }
                    }
                  }

                  function createMarker(place) {
                    var placeLoc = place.geometry.location;
                    var marker = new google.maps.Marker({
                      map: map,
                      position: place.geometry.location
                    });

                    google.maps.event.addListener(marker, 'click', function() {
                      infowindow.setContent(place.name);
                      infowindow.open(map, this);
                    });
                      
                      
                  }
                
                function initMap() {
                    var uluru = {lat: -25.363, lng: 131.044};
                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 4,
                      center: uluru
                    });
                    var marker = new google.maps.Marker({
                      position: uluru,
                      map: map
                    });
                  }
                
                
                
            