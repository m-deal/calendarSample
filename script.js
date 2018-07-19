document.addEventListener('DOMContentLoaded', function(event) {
  var calendarLink = document.getElementsByClassName('calendar-link');
  for (i = 0; i < calendarLink.length; i++) {
    calendarLink[i].addEventListener('click', showModal, false);
  }
});

function showModal(e) {
  var modalBody = '.modal-body';
  console.log(e);
  var modalBodyDay = e.toElement.dataset.day;
  document.querySelector('.modal-title').innerHTML = DATA[modalBodyDay].title;
  document.querySelector('.calendar-body').innerHTML =
    DATA[modalBodyDay].participants;
}
