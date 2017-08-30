$(document).ready(function() {
  window.dancers = [];
  window.stillDancers = [];
  

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('data-dancer-maker-function-name');
    //console.log(dancerMakerFunctionName);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window['makeBlinkyDancer'];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addPopDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('makePopDancer');
    var dancerMakerFunction = window['makePopDancer'];

    var dancer = new dancerMakerFunction (
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      400
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    window.stillDancers.push(dancer);
  });

  $('.addBrownDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('makeBrownDancer');
    var dancerMakerFunction = window['makeBrownDancer'];

    var dancer = new dancerMakerFunction (
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      400
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    window.stillDancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    var top = $('body').height() / 2;
    var size = $('body').width() / window.stillDancers.length;
    var left = 0;
    for (var i = 0; i < window.stillDancers.length; i++) {
      window.stillDancers[i].setPosition(top, left);
      left += size;
    }
  });

  $('.scatterButton').on('click', function(event) {

    for (var i = 0; i < window.stillDancers.length; i++) {
      var top = $('body').height() * Math.random();    
      var left = $('body').width() * Math.random();
      window.stillDancers[i].setPosition(top, left);
    }
  });

  $('body').on('mouseenter', 'img', function() {
    console.log('hovered');
    //$(this).css({"width": "width * 2", "height": "auto"});
    $(this).css("transform", "scale(2)");
  });

  $('body').on('mouseleave', 'img', function() {
    //console.log('Left');
    $(this).css("transform", "scale(1)");
  });

  $('body').on('click', 'img', function() {
    //var currentIndex = window.stillDancers.indexOf(this);
    //console.log(currentIndex);
    var randomIndex = Math.floor(Math.random() * window.stillDancers.length);
    var newTop = window.stillDancers[randomIndex].$node.css("top");
    var newLeft = window.stillDancers[randomIndex].$node.css("left");
    $(this).animate({"left": newTop, "top": newLeft});
    console.log(newTop, newLeft);

    // while (randomIndex === currentIndex) {
    //   randomIndex = Math.floor(Math.random() * window.stillDancers.length);
    // }
    // console.log(window.stillDancers[randomIndex]);

  });
  // $('.dancer').on('mousehover', function(event) {
  //   this.$node.animate({'width': '150%', 'height': '150%'}, 400);
  // });
});

