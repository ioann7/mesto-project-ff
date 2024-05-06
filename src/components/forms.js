import { closePopup } from './modal.js';
import { createCard } from './card.js';

const addSubmitListener = (formElement, popupForClose, onSubmit) => {
    const handleFormSubmit = (evt) => {
        evt.preventDefault();

        onSubmit();

        if (popupForClose !== undefined) {
            closePopup(popupForClose);
        }
    };

    formElement.addEventListener('submit', handleFormSubmit);
};

export const addEditProfileSubmitListener = (
    formElement,
    fieldsPairs,
    popupForClose
) => {
    const onSubmit = () => {
        for (const [viewField, inputField] of fieldsPairs) {
            viewField.textContent = inputField.value;
        }
    };

    addSubmitListener(formElement, popupForClose, onSubmit);
};

export const addCreateCardSubmitListener = (
    formElement,
    inputName,
    inputUrl,
    cardTemplate,
    placesList,
    popupForClose,
    deleteCardHandler,
    likeCardHandler,
    enlargeCardImageHandler
) => {
    const onSubmit = () => {
        const cardData = {
            name: inputName.value,
            link: inputUrl.value,
        };

        placesList.prepend(
            createCard(
                cardData,
                cardTemplate,
                deleteCardHandler,
                likeCardHandler,
                enlargeCardImageHandler
            )
        );
    };

    addSubmitListener(formElement, popupForClose, onSubmit);
};
