import { useState } from "react";
import Card from "../Card/Card";
import cards from "../Card/Cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Импортируйте Navigation и Pagination из swiper/modules
import 'swiper/css'
import 'swiper/css/navigation'; // Стили для навигации
import 'swiper/css/pagination'; // Стили для пагинации
import "./Catalog.css";
import ContactList from "../Contact/ContactList";

export default function Catalog() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };



  return (
    <div className="catalog">
      <h2 className="catalog-title">Catalog</h2>
      <div className="grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            src={card.src}
            alt={card.alt}
            title={card.title}
            price={card.price}
            size={card.size}
            onClick={() => openModal(card)}
          />
        ))}
      </div>
      {isModalOpen && selectedCard && (
        <div className="modal-wrapper">
          <span className="close-button" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content">
            <Swiper
              className="modal-swiper"
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              navigation // Включаем навигацию
              pagination={{ clickable: true }} // Включаем пагинацию
              modules={[Navigation, Pagination]} // Добавляем модули сюда
            >
              {selectedCard.images.map((image, index) => (
                <SwiperSlide key={index} className="modal-swiper-slide">
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="modal-img"
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="modal-info">
              <p className="modal-title">
                <span className="p-title">Название: </span> {selectedCard.title}
              </p>
              <p className="modal-description">
                <span className="p-title">Описание: </span> {selectedCard.description}
              </p>
              <p className="modal-price">
                <span className="p-title">Цена: </span> {selectedCard.price} тг
              </p>
              <div className="modal-order">
                <ContactList />  
              </div>
              <div className="modal-extra-info">
                <p className="modal-extra-description">
                  <span className="p-title">Дополнительная информация: </span> {selectedCard.extraDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}