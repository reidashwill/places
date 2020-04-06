
//UI Logic --------
  $(document).ready(function(){
    $("#portlandButton").click(function(){
      $("#result").text(portland.summary());    
    })
    $("#seattleButton").click(function(){
      $("#result").text(seattle.summary());    
    })
    $("#newYorkButton").click(function(){
      $("#result").text(newYork.summary());    
    })
  });


// Business logic for places

function Place(location, landmark, season) {
  this.location = location;
  this.landmark = landmark;
  this.season = season;
}
var portland = new Place("Portland, Oregon", "The Bluffs", "summer");
var seattle = new Place("Seattle, Washington", "The Space Needle", "fall");
var newYork = new Place("New York, New York", "The Statue of Liberty", "...maybe just don't come")
  

Place.prototype.summary = function() {
  return "Feel like taking a vacation? Come on down to " + this.landmark + " in " + this.location + ". The best time to visit is during the " + this.season + "."
}