import { closePopup } from './modal.js';
import { createCard } from './card.js';
import {
    createCard as createCardRequest,
    editMyProfile,
    editMyAvatar,
} from './api.js';

const renderSaving = (isSaving, button) => {
    button.textContent = isSaving ? 'Сохранение...' : 'Сохранить';
};

const addSubmitListener = (formElement, popupForClose, onSubmit) => {
    const handleFormSubmit = (evt) => {
        evt.preventDefault();

        const submitButton = formElement.querySelector('.popup__button');
        renderSaving(true, submitButton);

        onSubmit().finally(() => renderSaving(false, submitButton));

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
        return editMyProfile(nameInput.value, aboutInput.value).then(
            (response) => {
                nameField.textContent = response.name;
                aboutField.textContent = response.about;
            }
        );
    };

    addSubmitListener(formElement, popupForClose, onSubmit);
};

export const addEditAvatarSubmitListener = (formElement, inputUrl, profileImage, popupForClose) => {
    const onSubmit = () => {
        return editMyAvatar(inputUrl.value).then((response) => {
            profileImage.style = `background-image: url('${response.avatar}')`;
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
        return createCardRequest(inputName.value, inputUrl.value).then(
            (response) => {
                placesList.prepend(
                    createCard(
                        response,
                        userId,
                        cardTemplate,
                        deleteCardHandler,
                        likeCardHandler,
                        enlargeCardImageHandler
                    )
                );

                formElement.reset();
            }
        );
    };

    addSubmitListener(formElement, popupForClose, onSubmit);
};
