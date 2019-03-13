'use strict';

var allCreatures = [];
var keywords = [];
/*Rendering images to HTML*/
function Creature(animal) {
  this.title = animal.title;
  this.image_url = animal.image_url;
  this.description = animal.description;
  this.keyword = animal.keyword;
  this.horns = animal.horns;
  allCreatures.push(this);
}


Creature.loadCreatures = () => {
  console.log(allCreatures);
  allCreatures.forEach(creature => creature.render())
}


function readJson (){
  $.get('page-1.json', data => {
    data.forEach(item => {
      new Creature(item);
    });
  }).then(Creature.loadCreatures);
}

function checkKeywords() {
  console.log('all creatures array', allCreatures);
  // allCreatures.forEach( obj => {
  //   console.log('hi', obj);
  //   if (!keywords.includes(obj.keyword)){
  //     keywords.push(obj.keyword);
  //   }
  // });
  for(let i = 0; i < allCreatures.length; i++){
    console.log(allCreatures[i]);

    if(!keywords.includes(allCreatures[i].keyword)){
      keywords.push(allCreatures[i].keyword);
    }
  }
  console.log('keywords array', keywords);
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





readJson();

checkKeywords();
options();

/*------------------------------------------------------------------------------------------------------------------------------*/
/*Drop down selector 'Keywords'*/



// $('select[title="Creature"]').on('change', function ()
// {
//   let $selection = $(this).val();
//   $('img').hide()
//   $('img')
// })
