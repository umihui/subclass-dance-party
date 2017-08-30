var makeBrownDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<img class = "dancer" src="src/polarBear.gif" alt = "" height="225" width="auto" style="position:absolute; border-radius: 75px;">');
  this.setPosition.call(this, top, left);
  this.step();
  
};

makeBrownDancer.prototype = Object.create(makeDancer.prototype);
makeBrownDancer.prototype.constructor = makeBrownDancer;

makeBrownDancer.prototype.oldStep = makeDancer.prototype.step;

makeBrownDancer.prototype.step = function() {
  // this.$node.fadeIn('slow');
  // this.$node.fadeOut('slow');
  this.oldStep();
};