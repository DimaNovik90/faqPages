const butonActiv = document.querySelectorAll('.questions__contaiter-button')
const form = document.querySelector('.form');
const searchInpyt = form.querySelector('.form__input-search');
const btnSearch = form.querySelector('.form__button')



function handlerSerch(evt) {
  evt.preventDefault();
}
form.addEventListener('submit', handlerSerch)







butonActiv.forEach((item) => {
  item.addEventListener('click', function(evt) {
    evt.currentTarget.classList.contains('.questions__widget');
    evt.target.closest('.questions__widget').classList.toggle('questions__widget_visible_text').transition = "2s";
  })
})


