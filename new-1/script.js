$(function(){
  $btnToggle = $('.btn--toggle');
  $submenuTrigger = $('.submenu--trigger');
  $thirdSubmenuTrigger = $('.third-submenu--trigger');
  
  $btnToggle.on('click', function(e) {
    e.preventDefault();
    let $target = $( $(e.currentTarget).attr('data-target') );
    $target.toggleClass('showing');
  });
  
  
  $submenuTrigger.on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });
  
  $thirdSubmenuTrigger.on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('active');
  })
});
