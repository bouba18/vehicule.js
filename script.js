var vehicule = function (modele, kilometrage, motor, color){
  this.modele = modele;
  this.kilometrage;
  this.voyage = function voyage(km){
    return this.kilometrage += km;
  }
  this.motor = motor || "v8";
  this.color = color || "white"
}

mercedes = new vehicule("classe a", 1000, "v8", "blue");
mercedes
peugeot = new vehicule("208", 1000, "v8", "grey");
peugeot
porsche = new vehicule("carrera", 1000, "v12", "white");
porsche
lamborghini = new vehicule("aventador", 1000, "v12", "green");
lamborghini
bentley = new vehicule("speed", 1000, "v8", "carbonne");
bentley
