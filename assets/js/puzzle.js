$(document).ready(function() {
  $( ".piece" ).draggable({
    containment: '.puzzle ul',
    grid: [15, 15],
    stop: function(event, ui) {
    },
  });
  $( ".piece" ).draggable("enable");
});
