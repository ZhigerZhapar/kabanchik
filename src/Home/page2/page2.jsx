import cl from './page2.module.css';
import { useParams } from "react-router-dom";
import arrowLeft from './img/header/arrow-left.svg';
import home from './img/header/home.svg';
import beverage from './img/slider/beverage.svg';
import circus from './img/slider/circus.svg';
import dance from './img/slider/dance.svg';
import castle from './img/slider/castle.svg';
import tree from './img/slider/tree.svg';
import search from './img/slider/search.svg';
import tool from './img/slider/tool.svg';
import img1 from './img/food/01.svg';
import img2 from './img/food/02.svg';
import img3 from './img/food/03.svg';
import yellow_heart from "../categoryPage/imgs/main/section__publications/icons/yellow_heart.svg"
import img4 from './img/food/04.svg';
import img5 from './img/food/05.svg';
import img6 from './img/food/06.svg';
import heart from './img/food/heart.svg';
import map from './img/map/map.svg';
import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import useFetch from "../../components/hooks/useFetch.js";
import FilterPage from "../filterPage/Filter.jsx";
import {useDispatch, useSelector} from "react-redux";
import {resetButton, setButtonPressed} from "../../features/buttonSlide.js";

const InfoPage = () => {
  const [showFilterPage, setShowFilterPage] = useState(false);
  const dispatch = useDispatch()
  const {buttons} = useSelector(state => state.button)

  const handleButtonClick = (buttonId) => {
    if (buttons[buttonId]?.isPressed) {
      dispatch(resetButton({ buttonId }));
    } else {
      dispatch(setButtonPressed({ buttonId }));
    }
  }

  const loopClick = () => {
    setShowFilterPage(true);
    document.body.style.overflow = 'hidden';
  }

  const handleFilterPageClose = () => {
    setShowFilterPage(false);
    document.body.style.overflow = 'auto';
  };

  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category);
  const { data, loading, error } = useFetch(
      `https://places-test-api.danya.tech/api/categories`
  );
  console.log(data);

  const categories = [
    { id: 1, name: 'food', icon: beverage, text: 'Еда' },
    { id: 2, name: 'interesting', icon: circus, text: 'Интересные места' },
    { id: 3, name: 'dance', icon: dance, text: 'Развлечения' },
    { id: 4, name: 'castle', icon: castle, text: 'Музеи и выставки' },
    { id: 5, name: 'tree', icon: tree, text: 'Загородом' },
    { id: 6, name: 'search', icon: search, text: 'Экскурсии' },
  ];

  useEffect(() => {
    setActiveCategory(category);
  }, [category]);

  const changeTab = (tabNumber) => {
    setActiveCategory(categories[tabNumber - 1].name);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
      <>
        {
            showFilterPage && (
                <div className={cl.filterPageOverlay} >
                  <div className={cl.modalContainer} onClick={() => handleFilterPageClose()}>
                    <FilterPage handleFilterPageClose={handleFilterPageClose}/>
                  </div>
                </div>
            )
        }
        <header className={cl.header}>
          <Link to={'/'}>
          <div className={`${cl.header__container} ${cl._container}`}>
            <a href="#" className={cl.header__icon}>
              <img src={arrowLeft} alt="" />
            </a>
            <a href="#" className={cl.header__icon}>
              <img src={home} alt="" />
            </a>
          </div>
          </Link>
        </header>

        <section className={`${cl.page__food} ${cl.food}`}>
          <div className={`${cl.wrapper} ${cl._container}`}>
            <ul className={cl.tabs_box}>
              {data && data.map((cat) => (
                  <li
                      key={cat.id}
                      className={`${cl.tab} `}
                  >
                    <img src={categories.icon} alt=""/>
                    <span className={cl.tab__text}>{cat.attributes.title}</span>
                  </li>
              ))}
            </ul>
            <div className={`${cl.tab_content} ${cl.active}`} id="tab1"></div>
            <div className={cl.tab_content} id="tab2"></div>
            <div className={cl.tab_content} id="tab3"></div>
          </div>

          <div className={`${cl.food__header} ${cl._container}`}>
            <div className={cl.food__content}>
              <div className={cl.food__title}>Еда</div>
              <div className={cl.food__desc}>
                Нажмите на кнопку «фильтры», чтобы выбрать наиболее подходящее место
              </div>
            </div>
            <div className={cl.food__icon}>
              <img onClick={loopClick} src={tool} alt=""/>
            </div>
          </div>

          <div className={`${cl.food__bottom} ${cl._container}`}>
            <div className={`${cl.food__row}`}>

              <div className={`${cl.food__column}`}>
                <Link to={'/previewPage'}>
                  <img src={img1} alt="John Smith"/>
                </Link>
                <button onClick={() => handleButtonClick(1)} className={`${cl.main_like}`}>
                  <img src={buttons[1]?.isPressed ? yellow_heart : heart} alt=""/>
                </button>
                <h2 className={`${cl.food__name}`}>ПРОСТРАНСТВА</h2>
                <p className={`${cl.food__position}`}>Севкабель Порт</p>
              </div>

              <div className={`${cl.food__column}`}>
                <Link to={'/previewPage'}>
                  <img src={img2} alt="John Smith"/>
                </Link>
                <button onClick={() => handleButtonClick(2)} className={`${cl.main_like}`}>
                  <img src={buttons[2]?.isPressed ? yellow_heart : heart} alt=""/>
                </button>
                <h2 className={`${cl.food__name}`}>ПРОСТРАНСТВА</h2>
                <p className={`${cl.food__position}`}>Третье Место</p>
              </div>

              <div className={`${cl.food__column}`}>
                <Link to={'/previewPage'}>
                  <img className="_ibg" src={img3} alt="John Smith"/>
                </Link>
                <button onClick={() => handleButtonClick(3)} className={`${cl.main_like}`}>
                  <img src={buttons[3]?.isPressed ? yellow_heart : heart} alt=""/>
                </button>
                <h2 className={`${cl.food__name}`}>КОНЦЕРТ</h2>
                <p className={`${cl.food__position}`}>Концерт в студии при свечах</p>
              </div>

              <div className={`${cl.food__column}`}>
                <Link to={'/previewPage'}>
                  <img className="_ibg" src={img4} alt="John Smith"/>
                </Link>
                <button onClick={() => handleButtonClick(4)} className={`${cl.main_like}`}>
                  <img src={buttons[4]?.isPressed ? yellow_heart : heart} alt=""/>
                </button>
                <h2 className={`${cl.food__name}`}>КОНЦЕРТ</h2>
                <p className={`${cl.food__position}`}>Вивальди. Времена года</p>
              </div>

              <div className={`${cl.food__column}`}>
                <Link to={'/previewPage'}>
                  <img className="_ibg" src={img1} alt="John Smith"/>
                </Link>
                <button onClick={() => handleButtonClick(5)} className={`${cl.main_like}`}>
                  <img src={buttons[5]?.isPressed ? yellow_heart : heart} alt=""/>
                </button>
                <h2 className={`${cl.food__name}`}>ПРОСТРАНСТВА</h2>
                <p className={`${cl.food__position}`}>Севкабель Порт</p>
              </div>

              <div className={`${cl.food__column}`}>
                <Link to={'/previewPage'}>
                  <img src={img2} alt="John Smith"/>
                </Link>
                <button onClick={() => handleButtonClick(6)} className={`${cl.main_like}`}>
                  <img src={buttons[6]?.isPressed ? yellow_heart : heart} alt=""/>
                </button>
                <h2 className={`${cl.food__name}`}>ПРОСТРАНСТВА</h2>
                <p className={`${cl.food__position}`}>Третье место</p>
              </div>

              <div className={`${cl.food__column}`}>
                <Link to={'/previewPage'}>
                  <img src={img5} alt="John Smith"/>
                </Link>
                <button onClick={() => handleButtonClick(7)} className={`${cl.main_like}`}>
                  <img src={buttons[7]?.isPressed ? yellow_heart : heart} alt=""/>
                </button>
                <h2 className={`${cl.food__name}`}>КОНЦЕРТ</h2>
                <p className={`${cl.food__position}`}>Чайковский. Ноктюрн номер 6</p>
              </div>

              <div className={`${cl.food__column}`}>
                <Link to={'/previewPage'}>
                  <img src={img6} alt="John Smith"/>
                </Link>
                <button onClick={() => handleButtonClick(8)} className={`${cl.main_like}`}>
                  <img src={buttons[8]?.isPressed ? yellow_heart : heart} alt=""/>
                </button>
                <h2 className={`${cl.food__name}`}>КОНЦЕРТ</h2>
                <p className={`${cl.food__position}`}>Chang cafe</p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${cl.page__map} ${cl.map}`}>
          <div className={`${cl.map__container} ${cl._container}`}>
            <div className={cl.map__content}>
              <div className={cl.map__title}>Онлайн-карта</div>
              <div className={cl.map__desc}>
                Интерактивная карта в Google Maps с местами города. Ищите новые места <p>рядом с вами!</p>
              </div>
            </div>
            <img src={map} alt=""/>
            <a className={cl.map_btn}>ОТКРЫТЬ ОНЛАЙН-КАРТУ</a>
          </div>
        </section>
      </>
  );
};

export default InfoPage;