export const deleteCardHandler = (card) => {
    card.remove();
};

export const likeCardHandler = (evt) => {
    evt.currentTarget.classList.toggle('card__like-button_is-active');
};

export const createCard = (
    data,
    userId,
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
    const cardLikeCount = card.querySelector('.card__like-count');
    const cardDeleteButton = card.querySelector('.card__delete-button');

    cardElement.dataset.id = data._id;
    cardTitle.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardLikeCount.textContent = data.likes.length;

    cardLikeButton.addEventListener('click', likeHandler);

    if (data.owner._id === userId) {
        cardDeleteButton.addEventListener('click', () =>
            deleteHandler(cardElement)
        );
    } else {
        cardDeleteButton.remove()
    }

    cardImage.addEventListener('click', () =>
        enlargeImageHandler(data.link, data.name)
    );

    return card;
};
