var makeBrownDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<img src="src/2015-brown.png" alt = "" height="42" width="42" style="position:absolute;">');
  this.setPosition.call(this, top, left);
  this.step();
  
};

makeBrownDancer.prototype = Object.create(makeDancer.prototype);
makeBrownDancer.prototype.constructor = makeBrownDancer;

makeBrownDancer.prototype.oldStep = makeDancer.prototype.step;

makeBrownDancer.prototype.step = function() {
  this.$node.fadeIn('slow');
  this.$node.fadeOut('slow');
  this.oldStep();
};