var pillow = [{material: 'feathers', hardness: 10}, {material: 'foam', hardness: 30}, {material: 'rice', hardness: 60}];
var material_value = _.pluck(pillow, 'material');



var last_one = _.last(["cat", "dog", "turtle", "frog"]);


var first_one = _.first(["cat", "dog", "turtle", "frog"]);


var random_number = _.random(0,10);

var Baby = function (options) {
var options = options || {};
this.sex = options.sex || '?'; 
this.activity = options.activity || 'kicking';
};