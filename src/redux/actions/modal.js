export const setAvatarModal = (nameModal ) => ({
type: 'ADD-MODAL',
payload: nameModal,
});

export const setBascketModal = (nameModal ) => ({
   type: 'ADD-MODAL-BASKET',
   payload: nameModal,
   });

   export const setQuestModal = (nameModal ) => ({
      type: 'ADD-MODAL-QUESTION',
      payload: nameModal,
      });

export const toggleBurgerModal = (nameModal)  => ({
   type: 'TOGGLE-BURGER',
   payload: nameModal,
})    