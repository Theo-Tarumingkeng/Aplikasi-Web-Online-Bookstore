const highlight = document.querySelector('.highlight');
const thumb = document.querySelector('.thumb');

highlight.addEventListener('click', function (e) {

if( e.target.className =='books') {
  thumb.src=e.target.src;
  thumb.classlist.add('fade');
}
}
)