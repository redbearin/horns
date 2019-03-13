'use strict';

function Creature(creature) {
  this.title = creature.title;
  this.image_url = creature.image_url;
  this.description = creature.description;
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
  creatureClone.find('img').attr('src', this.image_url);
  creatureClone.find('img').attr('alt', this.keyword);
  creatureClone.find('p').text(this.description);
  creatureClone.removeClass('clone');
  creatureClone.attr('class', this.title);
}

Creature.readJson = () => {
  $.get('page-1.json', 'json')
    .then (data => {
      data.forEach(item => {
        Creature.allCreatures.push(new Creature(item));
      })
    })
    .then(Creature.loadCreatures);
}

Creature.loadCreatures = () => {
  Creature.allCreatures.forEach(creature => creature.render())
}

$(() => Creature.readJson());
