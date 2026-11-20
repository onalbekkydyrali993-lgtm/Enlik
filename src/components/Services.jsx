import React from "react";

function Services() {
  const offerings = [
    {
      id: 1,
      title: "Specialty Эспрессо & Сүтті кофе",
      description: "Классикалық эспрессо, флэт уайт, капучино және өсімдік сүтінен жасалған нұсқалар.",
    },
    {
      id: 2,
      title: "V60 және Кемекс құю",
      description: "Таза әрі хош иісті фильтр-кофе — цитрус, жидек және какао реңктерімен.",
    },
    {
      id: 3,
      title: "Үйге арналған дәндер",
      description: "250 г және 1 кг қаптамадағы жаңа қуырылған дәндер, қажетінше тартып береміз.",
    },
    {
      id: 4,
      title: "Бариста шеберлік сабақтары",
      description: "Үйде дәмді кофе дайындау, латте-арт және дәм ажырату бойынша практикалық сессиялар.",
    },
  ];

  return (
    <section id="menu" className="catalog-block">
      <div className="wrap">
        <h2>Қызметтер мен өнімдер</h2>
        <div className="catalog-grid">
          {offerings.map((item) => (
            <article key={item.id} className="offer-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;