var makePopDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="src/cat.png" alt = "" height="160" width="auto" style="position:absolute; border-radius: 75px;">');
  this.setPosition.call(this, top, left);
  this.step();
  
};

makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;

makePopDancer.prototype.oldStep = makeDancer.prototype.step;

makePopDancer.prototype.step = function() {
  this.oldStep();
  this.$node.fadeIn(400, function() {
    $(this).addClass('newDancer');
  });
  this.$node.fadeOut(400, function() {
    $(this).removeClass('newDancer');
  });
};