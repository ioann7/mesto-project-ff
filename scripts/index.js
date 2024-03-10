const cardTemplate = document.querySelector('#card-template');
const placesList = document.querySelector('.places__list');


const createCard = (data, deleteCallback) => {
  const card = cardTemplate.content.cloneNode(true);
  const cardElement = card.querySelector('.places__item');
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const cardDeleteButton = card.querySelector('.card__delete-button');

  cardTitle.textContent = data['name'];
  cardImage.src = data['link'];
  cardImage.alt = data['name'];

  cardDeleteButton.addEventListener('click', () => deleteCallback(cardElement));

  return card;
}


const deleteCardCallback = card => {
  card.remove();
}


const renderCards = cards => {
  cards.forEach( cardData => {
    placesList.append(createCard(cardData, deleteCardCallback));
  });
}


renderCards(initialCards);
