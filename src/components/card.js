export const classCardLikeIsActive = 'card__like-button_is-active';

export const createCard = (
    data,
    cardTemplate,
    deleteHandler,
    likeHandler,
    enlargeImageHandler
) => {
    const card = cardTemplate.content.cloneNode(true);
    const cardElement = card.querySelector('.places__item');
    const cardTitle = card.querySelector('.card__title');
    const cardImage = card.querySelector('.card__image');
    const cardLikeButton = card.querySelector('.card__like-button');
    const cardDeleteButton = card.querySelector('.card__delete-button');

    cardTitle.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;

    cardLikeButton.addEventListener('click', likeHandler);

    cardDeleteButton.addEventListener('click', () =>
        deleteHandler(cardElement)
    );

    cardImage.addEventListener('click', () =>
        enlargeImageHandler(data.link, data.name)
    );

    return card;
};
