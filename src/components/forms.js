<<<<<<< HEAD
import { closePopup } from './modal.js';
import { renderCards } from './card.js';
=======
import { closePopup } from './modal';
import { renderCards } from './cards';
>>>>>>> 22242484578f40c7c227e09dee03397478519cf4

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
    popupForClose
) => {
    const onSubmit = () => {
        const cards = [
            {
                name: inputName.value,
                link: inputUrl.value,
            },
        ];

        renderCards(cards, cardTemplate, placesList);
    };

    addSubmitListener(formElement, popupForClose, onSubmit);
};
