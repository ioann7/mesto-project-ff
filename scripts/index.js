const cardTemplate = document.querySelector('#card-template');
const placesList = document.querySelector('.places__list');


const createCard = (data, deleteCallback) => {
  const card = cardTemplate.content.cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const cardDeleteButton = card.querySelector('.card__delete-button');

  cardTitle.textContent = data['name'];
  cardImage.src = data['link'];
  cardDeleteButton.addEventListener('click', deleteCallback);

  return card;
}


const deleteCardCallback = event => {
  card = event.target.closest('.places__item');
  card.remove();
}

const renderCards = cards => {
  for (const cardData of cards) {
    placesList.append(createCard(cardData, deleteCardCallback));
  }
}


renderCards(initialCards);
