export const deleteCardHandler = (card) => {
    card.remove();
};

export const likeCardHandler = (cardLikeCount) => {
    cardLikeCount.classList.toggle('card__like-button_is-active');
};

const isCardLiked = (likes, userId) => {
    return likes.some((like) => {
        return (like._id === userId);
    });
};

export const setCardLikeInfo = (cardLikeButton, cardLikeCount, likes, userId) => {
    cardLikeCount.textContent = likes.length;
    cardLikeButton.classList.toggle('card__like-button_is-active', isCardLiked(likes, userId));
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

    setCardLikeInfo(cardLikeButton, cardLikeCount, data.likes, userId);

    if (data.owner._id === userId) {
        cardDeleteButton.addEventListener('click', () =>
            deleteHandler(cardElement)
        );
    } else {
        cardDeleteButton.remove()
    }

    cardLikeButton.addEventListener('click', () => 
        likeHandler(cardLikeButton, cardLikeCount, cardElement, userId)
    );

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
