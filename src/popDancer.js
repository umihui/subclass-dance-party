var makePopDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.step();
  
};

makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;

makePopDancer.prototype.oldStep = makeDancer.prototype.step;

makePopDancer.prototype.step = function() {
  this.oldStep();
  this.$node.fadeIn('slow', function() {
    $(this).addClass('newDancer');
  });
  this.$node.fadeOut('slow', function() {
    $(this).removeClass('newDancer');
  });
};