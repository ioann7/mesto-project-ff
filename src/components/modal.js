<<<<<<< HEAD
const popupTimeAnimated = 600;

=======
>>>>>>> 22242484578f40c7c227e09dee03397478519cf4
export const openPopup = (popupElement) => {
    popupElement.classList.add('popup_is-animated');

    setTimeout(() => {
        popupElement.classList.add('popup_is-opened');
<<<<<<< HEAD
    }, 0);
=======
    }, 1);
>>>>>>> 22242484578f40c7c227e09dee03397478519cf4

    popupElement.addEventListener('click', closePopupClickHandler);
    document.addEventListener('keydown', closePopupEscHandler);
};

export const closePopup = (popupElement) => {
    popupElement.classList.remove('popup_is-opened');

    setTimeout(() => {
        popupElement.classList.remove('popup_is-animated');
<<<<<<< HEAD
    }, popupTimeAnimated);
=======
    }, 600);
>>>>>>> 22242484578f40c7c227e09dee03397478519cf4

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
