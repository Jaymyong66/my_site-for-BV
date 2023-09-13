"use strict";

new TypeIt(".home__title--strong", { loop: true, speed: 100 })
  .pause(1000)
  .delete()
  .type("Traveller")
  .pause(1000)
  .delete(9)
  .type("Developer")
  .pause(1000)
  .go();
