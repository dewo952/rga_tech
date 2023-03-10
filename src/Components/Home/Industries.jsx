import React from "react";
import "../../Styles/industries.css";
import airplane from "../../Assets/industries/airplane.png";
import product from "../../Assets/industries/product.png";
import health from "../../Assets/industries/health.png";
import telecom from "../../Assets/industries//broadcast.png";
import bank from "../../Assets/industries/bank.png";

const slideWidth = 30;

const _items = [
  {
    player: {
      title: "Banking, Insurance and Financial industries",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus optio blanditiis error dolores, officiis eveniet sunt consectetur molestiae fugiat nesciunt ratione ipsa illum magnam esse porro labore tempore architecto ipsam.",
      image: bank,
    },
  },
  {
    player: {
      title: "Travel, Transportation and Hospitality",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus optio blanditiis error dolores, officiis eveniet sunt consectetur molestiae fugiat nesciunt ratione ipsa illum magnam esse porro labore tempore architecto ipsam.",
      image: airplane,
    },
  },
  {
    player: {
      title: "Healthcare, Pharma and Lifesciences",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus optio blanditiis error dolores, officiis eveniet sunt consectetur molestiae fugiat nesciunt ratione ipsa illum magnam esse porro labore tempore architecto ipsam.",
      image: health,
    },
  },
  {
    player: {
      title: "Retail, Consumer Products and Goods",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus optio blanditiis error dolores, officiis eveniet sunt consectetur molestiae fugiat nesciunt ratione ipsa illum magnam esse porro labore tempore architecto ipsam.",
      image: product,
    },
  },
  {
    player: {
      title: "Telecom and Manufacturing",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus optio blanditiis error dolores, officiis eveniet sunt consectetur molestiae fugiat nesciunt ratione ipsa illum magnam esse porro labore tempore architecto ipsam.",
      image: telecom,
    },
  },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <img src={item.player.image} alt={item.player.title} />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{item.player.title}</h4>
        <p>{item.player.desc}</p>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const Industries = () => {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <>
      <div className="carousel__wrap_1">
        <div className="carousel__heading">
          <h1>Our tech expertise</h1>
        </div>
        <div className="carousel__wrap">
          <div className="carousel__inner">
            <button
              className="carousel__btn carousel__btn--prev"
              onClick={() => prevClick()}
            >
              <i className="carousel__btn-arrow carousel__btn-arrow--left" />
            </button>
            <div className="carousel__container">
              <ul className="carousel__slide-list">
                {items.map((pos, i) => (
                  <CarouselSlideItem
                    key={i}
                    idx={i}
                    pos={pos}
                    activeIdx={activeIdx}
                  />
                ))}
              </ul>
            </div>
            <button
              className="carousel__btn carousel__btn--next"
              onClick={() => nextClick()}
            >
              <i className="carousel__btn-arrow carousel__btn-arrow--right" />
            </button>
            <div className="carousel__dots">
              {items.slice(0, length).map((pos, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={i === activeIdx ? "dot active" : "dot"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
