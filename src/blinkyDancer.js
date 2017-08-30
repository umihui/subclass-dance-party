var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img class="dancer" src="src/star.png" alt = "" height="40" width="auto" style="position:absolute;">');
  this.left = left;
  this.top = top;
  console.log('Make Blinky dancer', top, left);
  this.step();
  this.direction = true;

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  //console.log(this);
  var top = this.top;
  var left = this.left;
  if (this.direction && left < $('body').width()) { 
    this.left += 150;
  } else if (this.direction && left >= $('body').width()) {
    this.direction = false;
  } else if (!this.direction && left > 0) {
    this.left -= 150;
  } else if (!this.direction && left < 0) {
    this.direction = true;
  }
  var newPosition = {
    top: this.top,
    left: this.left
  };
  this.$node.animate(newPosition);
  this.oldStep();
  
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
};
