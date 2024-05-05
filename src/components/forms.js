import { closePopup } from './modal.js';
import { renderCards } from './card.js';

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
