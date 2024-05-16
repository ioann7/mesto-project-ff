import { closePopup } from './modal.js';
import { createCard } from './card.js';
import { editMyProfile } from './api.js';
import { createCard as createCardRequest } from './api.js';

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
    nameElements,
    aboutElements,
    popupForClose
) => {
    const [nameField, nameInput] = nameElements;
    const [aboutField, aboutInput] = aboutElements;

    const onSubmit = () => {
        editMyProfile(nameInput.value, aboutInput.value).then((response) => {
            nameField.textContent = response.name;
            aboutField.textContent = response.about;
        });
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
    enlargeCardImageHandler,
    userId
) => {
    const onSubmit = () => {
        createCardRequest(inputName.value, inputUrl.value).then((response) => {
            const cardData = {
                name: response.name,
                link: response.link,
                likes: response.likes,
            };
            placesList.prepend(
                createCard(
                    cardData,
                    userId,
                    cardTemplate,
                    deleteCardHandler,
                    likeCardHandler,
                    enlargeCardImageHandler
                )
            );

            formElement.reset();
        });
    };

    addSubmitListener(formElement, popupForClose, onSubmit);
};
