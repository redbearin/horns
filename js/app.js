'use strict';

function Creature(creature) {
  this.title = creature.title;
  this.img_url = creature.img_url;
  this.description = creature.desciption;
  this.keyword = creature.keyword;
  this.horns = creature.horns;
}

Creature.allCreatures = [];

Creature.prototype.render = function() {
  $('main').append('<div class="clone"></div>');
  let creatureClone = $('div[class="clone"]');

  let creatureHtml = $('#creature-template').html();

  creatureClone.html(creatureHtml);

  creatureClone.find('h2').text(this.title);
  creatureClone.find('img').text(this.img_url);
  creatureClone.find('p').text(this.description);
  creatureClone.find('h3').text(this.description);  

  
}
