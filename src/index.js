import './pages/index.css';
import { initialCards } from './components/cards.js';
import { renderCards } from './components/cars.js'
import { openPopup } from './components/modal.js';
import {
    addEditProfileSubmitListener,
    addCreateCardSubmitListener,
} from './components/forms.js';

const cardTemplate = document.querySelector('#card-template');
const placesList = document.querySelector('.places__list');
const addButton = document.querySelector('.profile__add-button');
const popupImgType = document.querySelector('.popup_type_image');
const imageInPopup = document.querySelector('.popup__image');
const captionInPopup = document.querySelector('.popup__caption');

const profileInfo = document.querySelector('.profile__info');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileDescription = profileInfo.querySelector('.profile__description');
const profileEditButton = profileInfo.querySelector('.profile__edit-button');

const popupEditProfile = document.querySelector('.popup_type_edit');
const editProfileForm = popupEditProfile.querySelector('.popup__form');
const editProfileInputName = editProfileForm.querySelector(
    '.popup__input_type_name'
);
const editProfileInputDescription = editProfileForm.querySelector(
    '.popup__input_type_description'
);

const popupNewCard = document.querySelector('.popup_type_new-card');
const newCardForm = popupNewCard.querySelector('.popup__form');
const newCardInputName = newCardForm.querySelector(
    '.popup__input_type_card-name'
);
const newCardInputUrl = newCardForm.querySelector('.popup__input_type_url');

const addListenersToPopups = () => {
    addButton.addEventListener('click', () => {
        openPopup(popupNewCard);
    });

    profileEditButton.addEventListener('click', () => {
        openPopup(popupEditProfile);
        editProfileInputName.value = profileTitle.textContent;
        editProfileInputDescription.value = profileDescription.textContent;
    });

    placesList.addEventListener('click', (evt) => {
        const image = evt.target;
        if (image.classList.contains('card__image')) {
            imageInPopup.src = image.src;
            imageInPopup.alt = image.alt;
            captionInPopup.textContent = image.alt;
            openPopup(popupImgType);
        }
    });
};

renderCards(initialCards, cardTemplate, placesList);
addListenersToPopups();
addEditProfileSubmitListener(
    editProfileForm,
    [
        [profileTitle, editProfileInputName],
        [profileDescription, editProfileInputDescription],
    ],
    popupEditProfile
);
addCreateCardSubmitListener(
    newCardForm,
    newCardInputName,
    newCardInputUrl,
    cardTemplate,
    placesList,
    popupNewCard
);
