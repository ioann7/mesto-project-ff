
const deleteCardHandler = (card) => {
    card.remove();
};

const likeCardHandler = (evt) => {
    evt.currentTarget.classList.toggle('card__like-button_is-active');
};

export const createCard = (data, cardTemplate, deleteHandler, likeHandler) => {
    const card = cardTemplate.content.cloneNode(true);
    const cardElement = card.querySelector('.places__item');
    const cardTitle = card.querySelector('.card__title');
    const cardImage = card.querySelector('.card__image');
    const cardLikeButton = card.querySelector('.card__like-button');
    const cardDeleteButton = card.querySelector('.card__delete-button');

    cardTitle.textContent = data['name'];
    cardImage.src = data['link'];
    cardImage.alt = data['name'];

    cardLikeButton.addEventListener('click', likeHandler);

    cardDeleteButton.addEventListener('click', () =>
        deleteHandler(cardElement)
    );

    return card;
};

export const renderCards = (cards, cardTemplate, placesList) => {
    cards.forEach((cardData) => {
        placesList.prepend(
            createCard(
                cardData,
                cardTemplate,
                deleteCardHandler,
                likeCardHandler
            )
        );
    });
};
