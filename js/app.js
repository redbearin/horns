'use strict';
/*Rendering images to HTML*/
function Creature(creature) {
  this.title = creature.title;
  this.image_url = creature.image_url;
  this.description = creature.description;
  this.keyword = creature.keyword;
  this.horns = creature.horns;
}

var allCreatures = [];

var keywords = [];

function checkKeywords() {
  allCreatures.forEach(object =>{
    if (!keywords.includes(object.keyword)){
      keywords.push(object.keyword);
    }});
}

function options() {
  for(let i=0; i<keywords.length; i++){
    $('select').append('<option class="clone"></option>');
    let optionClone = $('<option[class="clone"]');
    let optionHtml = $('#option-template').html();
    optionClone.html(optionHtml);

    optionClone.find('option').text(keywords[i]);
    optionClone.removeClass('clone');
    optionClone.attr('class', keywords[i]);
  }
}

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
        allCreatures.push(new Creature(item));
      })
    })
    .then(Creature.loadCreatures);
}

Creature.loadCreatures = () => {
  allCreatures.forEach(creature => creature.render())
}

checkKeywords();
options();

$(() => Creature.readJson());

/*------------------------------------------------------------------------------------------------------------------------------*/
/*Drop down selector 'Keywords'*/



// $('select[title="Creature"]').on('change', function ()
// {
//   let $selection = $(this).val();
//   $('img').hide()
//   $('img')
// })
