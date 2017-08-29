var makeBrownDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  console.log('Make Brown dancer', top, left);
  
  this.$node = $('<span><img src="src/2015-brown.png" alt = "" height="42" width="42"></span>');
  this.setPosition.bind(this, top, left);
  this.oldStep(timeBetweenSteps);
  
};

makeBrownDancer.prototype = Object.create(makeDancer.prototype);
makeBrownDancer.prototype.constructor = makeBrownDancer;

makeBrownDancer.prototype.oldStep = makeDancer.prototype.step;

makeBrownDancer.prototype.step = function(timeBetweenSteps) {
  this.$node.fadeIn('slow');
  this.$node.fadeOut('slow');
  this.oldStep(timeBetweenSteps);
};