import { api } from "../components/Api.js";

Promise.all([api.getInitialCards()])
  .then(([cards]) => {
   cards.reverse();
  initialCardsList.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

  const initialCardsList = new Section({
    items: [],
     renderer: (data) => {
      initialCardsList.addItem(createNewCard ({
      name: data.name,
      link: data.link,
      likes: data.likes,
      _id: data._id,
      userId: userId,
      ownerId: data.owner._id,
      }));
     },
  },
   ".cards__grid"
   );
  
   fetch("https://www.ozon.ru/context/detail/id/148279648/")