export const openPopup = (popupElement) => {
    popupElement.classList.add('popup_is-animated');

    setTimeout(() => {
        popupElement.classList.add('popup_is-opened');
    }, 1);

    popupElement.addEventListener('click', closePopupClickHandler);
    document.addEventListener('keydown', closePopupEscHandler);
};

export const closePopup = (popupElement) => {
    popupElement.classList.remove('popup_is-opened');

    setTimeout(() => {
        popupElement.classList.remove('popup_is-animated');
    }, 600);

    popupElement.removeEventListener('click', closePopupClickHandler);
    document.removeEventListener('keydown', closePopupEscHandler);
};

const closePopupClickHandler = (evt) => {
    const target = evt.target;

    if (target.classList.contains('popup_is-opened')) {
        closePopup(target);
    } else if (target.classList.contains('popup__close')) {
        closePopup(target.closest('.popup_is-opened'));
    }
};

const closePopupEscHandler = (evt) => {
    if (evt.key === 'Escape') {
        const popupElement = document.querySelector('.popup_is-opened');
        closePopup(popupElement);
    }
};
