// Sort project items by descending order
//
$(document).on('click', 'li[data-sort]', function(e) {
  var attr = 'data-' + $(e.target).attr('data-sort');
  $('div[data-title]').sort(function(a, b) {
    return $(b).attr(attr) > $(a).attr(attr);
  }).each(function(i) {
    var order = i + 1;
    $(this).css({order: order})
  })
});