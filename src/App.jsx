import './App.css';
import Basket from './img/Basket.png'
function App() {
  return (
    <div className="App">
      <div className='Golowna'>
        <div className='container'>
          <header className='header'>
            <h1>Союз Логистик</h1>
            <nav>
              <ul className="nav-item">
                <li className="nav-list">
                  Главная
                </li>
                <li className="nav-list">
                  О компании
                </li>
                <li className="nav-list">
                  Отзывы
                </li>
                <li className="nav-list">
                  Контакты
                </li>
              </ul>
            </nav>
            <div className="Basket">
              <img src={Basket} alt="" />
            </div>
          </header>
        </div>
      </div>

    </div>
  );
}

export default App;
