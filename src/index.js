import './pages/index.css';
import { createCard, setCardLikeInfo } from './components/card.js';
import { openPopup } from './components/modal.js';
import {
    addEditProfileSubmitListener,
    addCreateCardSubmitListener,
    addEditAvatarSubmitListener,
} from './components/forms.js';
import { enableValidation, clearValidation } from './components/validation.js';
import {
    getMyProfile,
    getInitialCards,
    deleteCard,
    likeCard,
    unLikeCard,
} from './components/api.js';

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
const profileImage = document.querySelector('.profile__image');

const popupEditProfile = document.querySelector('.popup_type_edit');
const editProfileForm = popupEditProfile.querySelector('.popup__form');
const editProfileInputName = editProfileForm.querySelector(
    '#popup__input_type_name'
);
const editProfileInputDescription = editProfileForm.querySelector(
    '#popup__input_type_description'
);

const popupEditAvatar = document.querySelector('.popup_type_avatar');
const editAvatarForm = popupEditAvatar.querySelector('.popup__form');
const editAvatarInputLink = editAvatarForm.querySelector(
    '#popup__input_type_avatar-url'
);

const popupNewCard = document.querySelector('.popup_type_new-card');
const newCardForm = popupNewCard.querySelector('.popup__form');
const newCardInputName = newCardForm.querySelector(
    '#popup__input_type_card-name'
);
const newCardInputUrl = newCardForm.querySelector('#popup__input_type_url');

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__help-text_error_visible',
};

const enlargeCardImageHandler = (link, name) => {
    imageInPopup.src = link;
    imageInPopup.alt = name;
    captionInPopup.textContent = name;
    openPopup(popupImgType);
};

const deleteCardHandler = (cardElement) => {
    deleteCard(cardElement.dataset.id).then((response) => {
        cardElement.remove();
    });
};

const likeCardHandler = (
    cardLikeButton,
    cardLikeCount,
    cardElement,
    userId
) => {
    const renderResponse = (response) => {
        setCardLikeInfo(cardLikeButton, cardLikeCount, response.likes, userId);
    };

    if (cardLikeButton.classList.contains('card__like-button_is-active')) {
        unLikeCard(cardElement.dataset.id).then((resp) => {
            renderResponse(resp);
        });
    } else {
        likeCard(cardElement.dataset.id).then((resp) => {
            renderResponse(resp);
        });
    }
};

const renderCards = (cards, userId) => {
    cards.forEach((cardData) => {
        placesList.append(
            createCard(
                cardData,
                userId,
                cardTemplate,
                deleteCardHandler,
                likeCardHandler,
                enlargeCardImageHandler
            )
        );
    });
};

const renderProfileData = (profileData) => {
    profileTitle.textContent = profileData.name;
    profileDescription.textContent = profileData.about;
    profileImage.style = `background-image: url('${profileData.avatar}')`;
};

const fetchAndRenderData = () => {
    return Promise.all([getMyProfile(), getInitialCards()])
        .then((responses) => {
            const [profileData, cards] = responses;
            const userId = profileData._id;
            renderProfileData(profileData);
            renderCards(cards, userId);
            return { profileData: profileData, cards: cards, userId: userId };
        })
        .catch((err) => console.error(err));
};

const addListenersToPopups = () => {
    addButton.addEventListener('click', () => {
        clearValidation(newCardForm, validationConfig);
        openPopup(popupNewCard);
    });

    profileEditButton.addEventListener('click', () => {
        clearValidation(editProfileForm, validationConfig);
        openPopup(popupEditProfile);
        editProfileInputName.value = profileTitle.textContent;
        editProfileInputDescription.value = profileDescription.textContent;
    });

    profileImage.addEventListener('click', () => {
        clearValidation(editProfileForm, validationConfig);
        openPopup(popupEditAvatar);
    });
};

fetchAndRenderData().then(({ userId }) => {
    addListenersToPopups();
    addEditProfileSubmitListener(
        editProfileForm,
        [profileTitle, editProfileInputName],
        [profileDescription, editProfileInputDescription],
        popupEditProfile
    );
    addEditAvatarSubmitListener(
        editAvatarForm,
        editAvatarInputLink,
        profileImage,
        popupEditAvatar
    )
    addCreateCardSubmitListener(
        newCardForm,
        newCardInputName,
        newCardInputUrl,
        cardTemplate,
        placesList,
        popupNewCard,
        deleteCardHandler,
        likeCardHandler,
        enlargeCardImageHandler,
        userId
    );

    enableValidation(validationConfig);
});
