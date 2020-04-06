
  var portland = {
   location = "Oregon",
   landmark = "the Bluffs",
   season = "summer" 
  }

  $(document).ready(function(){
    event.preventDeafult();
    
  })


// Business logic for places
function Place(location, landmark, season) {
 this.location = location;
 this.landmark = landmark;
 this.season = season; 
}

Place.prototype.summary = function() {
  return this.landmark + " is located at " + this.location + ", the best time to visit is in the " + this.season
}