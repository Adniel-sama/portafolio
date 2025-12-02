$(function(){
  $('.filter-btn').on('click', function(){
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    const filter = $(this).data('filter');
    if(filter === 'all') $('.project-card').show();
    else {
      $('.project-card').each(function(){
        const tags = $(this).data('tags');
        if(String(tags).indexOf(filter) !== -1) $(this).show(); else $(this).hide();
      });
    }
  });

  $('#projectModal').on('show.bs.modal', function (event) {
    const btn = $(event.relatedTarget);
    $('#modalTitle').text(btn.data('title') || 'Proyecto');
    $('#modalDesc').text(btn.data('desc') || '');
    const img = btn.data('image') || '';
    $('#modalImage').attr('src', img).toggle(Boolean(img));
    $('#modalRepo').attr('href', btn.data('repo') || '#');
  });
});
