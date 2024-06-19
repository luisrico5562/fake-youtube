function changeCategory(selection) {
    const oldSelectedButton = document.querySelector('.category--selected');
    oldSelectedButton.classList.remove('category--selected');
    oldSelectedButton.classList.add('category');
    const selectedButton = document.querySelector(`.${selection}`);
    selectedButton.classList.remove('category');
    selectedButton.classList.add('category--selected');
}