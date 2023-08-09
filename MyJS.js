     //...........................MY VARS..................................................//
     const setSize= 0.50; /*here you can chanege the size of the hamburger Button the size is( 200px * size you chuse)*/
     const setSpeed = 200; /* Set speed in M/S  */
     const BurgerBorderArray = Array.from(document.getElementsByClassName(`BurgerBorder`));
     
     //first margin parameters ....................[0][0]......[0][1].......[0][2].........//
     const marginFirstState =[/*Top Margin*/   [0*setSize  ,30*setSize ,60*setSize],
                              /*right margin*/ [50*setSize ,50*setSize ,50*setSize],
                              /*bottom margin*/[20*setSize ,20*setSize ,20*setSize],
                              /*left margin*/  [50*setSize ,50*setSize ,50*setSize]];
     //secend margin parameters ...................[0][0]......[0][1].......[0][2].........//
     const marginSecendState =[/*Top Margin*/   [40*setSize ,40*setSize  ,40*setSize],
                               /*right margin*/ [0*setSize  ,50*setSize  ,50*setSize],
                               /*bottom margin*/[0*setSize  ,0*setSize   ,0*setSize],
                               /*left margin*/  [50*setSize ,100*setSize,50*setSize]];
    
/*load my css parameters */
window.onload = function() {    
         BurgerBorderArray.forEach(BurgerBorderArray => {
         BurgerBorderArray.style.width=`${200*setSize}px`;
         BurgerBorderArray.style.height=`${200*setSize}px`;
         for (let borderArrayChildNumber = 0; borderArrayChildNumber <= 2; borderArrayChildNumber++) {
           BurgerBorderArray.children[borderArrayChildNumber].style.transitionDuration = `${setSpeed}ms`;
           BurgerBorderArray.children[borderArrayChildNumber].style.width=`${100*setSize}px`;// width of the black bar[.BurgerX]
           BurgerBorderArray.children[borderArrayChildNumber].style.height=`${16*setSize}px`;// height of the black bar [.BurgerX]
           BurgerBorderArray.children[borderArrayChildNumber].style.top=`${60*setSize}px`;// plaicmant form the top of black bar [.BurgerX]
           BurgerBorderArray.children[borderArrayChildNumber].style.margin = `
                                                            ${marginFirstState[0][borderArrayChildNumber]}px 
                                                            ${marginFirstState[1][borderArrayChildNumber]}px 
                                                            ${marginFirstState[2][borderArrayChildNumber]}px 
                                                            ${marginFirstState[3][borderArrayChildNumber]}px`;
              }
             })}
     
//make click event for all the X boxes 
BurgerBorderArray.forEach(BurgerBorderArray => { 
 BurgerBorderArray.addEventListener('click',function(){
     // vars for 
     let StateCheckTop = parseInt(BurgerBorderArray.children[0].style.marginTop);  
     let checkRotate =parseInt(BurgerBorderArray.children[0].style.transform.match(/-?\d+/));  
     console.log( checkRotate)                      
                                   
                                
     if(StateCheckTop != 0 ){

          setTimeout(function() {
             for (let borderArrayChildNumber = 0; borderArrayChildNumber <= 2; borderArrayChildNumber++) {
                 /*margin child || state one*/
                 BurgerBorderArray.children[borderArrayChildNumber].style.margin = `
                                                           ${marginFirstState[0][borderArrayChildNumber]}px 
                                                           ${marginFirstState[1][borderArrayChildNumber]}px 
                                                           ${marginFirstState[2][borderArrayChildNumber]}px 
                                                           ${marginFirstState[3][borderArrayChildNumber]}px`;

             }
         BurgerBorderArray.children[1].style.width = `${100*setSize}px`;
         BurgerBorderArray.children[1].style.hight = `${16*setSize}px`;
         BurgerBorderArray.children[0].style.transform = 'rotate(0deg)';
         BurgerBorderArray.children[2].style.transform = 'rotate(0deg)';
         }, setSpeed);
         
          
         
     }
     else{
         for (let borderArrayChildNumber = 0; borderArrayChildNumber <= 2; borderArrayChildNumber++) {
             /*margin child || state two*/
             BurgerBorderArray.children[borderArrayChildNumber].style.margin =     `
                                                           ${marginSecendState[0][borderArrayChildNumber]}px 
                                                           ${marginSecendState[1][borderArrayChildNumber]}px 
                                                           ${marginSecendState[2][borderArrayChildNumber]}px 
                                                           ${marginSecendState[3][borderArrayChildNumber]}px`;

         }
         setTimeout(function() {
             BurgerBorderArray.children[0].style.transform = 'rotate(45deg)';
         BurgerBorderArray.children[2].style.transform = 'rotate(-45deg)';
         }, setSpeed);

         BurgerBorderArray.children[1].style.width = '0px';
         BurgerBorderArray.children[1].style.hight = '0px';
     }

     
 })
});