import { motion } from 'framer-motion';
import { useState } from 'react';
import './RomanticSection.css';

const movieCouples = [
  {
    id: 1,
    originalImage: '/1-orig.JPG',
    generatedImage: '/1-gen.png',
    movieTitle: 'Мистер и миссис Смит',
    characters: 'Джон и Джейн Смит',
    letter: 'Моя любимая, мы как герои этого фильма, мы команда, которая справится с любыми трудностями. Ты - моя партнерша не только в жизни, но и в каждом безумном приключении. С тобой даже обычный день превращается в захватывающий экшн, полный любви, смеха и незабываемых моментов. Ты делаешь мою жизнь ярче, интереснее и полной смысла. 💕'
  },
  {
    id: 2,
    originalImage: '/2-orig.JPG',
    generatedImage: '/2-gen.png',
    movieTitle: 'Американская семейка',
    characters: 'Глория и Джей Притчетт',
    letter: 'Солнышко, наша любовь, как у Глории и Джея, доказывает, что настоящие чувства не знают границ. Ты вошла в мою жизнь как настоящая загадка эмоций, страсти и невероятной красоты. С тобой каждый день - это праздник, полный тепла, смеха и бесконечной любви. Ты моя музыка, мой танец, мое счастье. Gracias por todo, mi amor! 🌹'
  },
  {
    id: 3,
    originalImage: '/3-orig.jpg',
    generatedImage: '/3-gen.png',
    movieTitle: 'Гордость и предубеждение',
    characters: 'Элизабет Беннет и мистер Дарси',
    letter: 'Любовь моя, как Дарси и Элизабет, мы прошли путь от первого взгляда до глубокого понимания друг друга. Ты покорила меня своим умом, добротой и искренностью. С каждым днем я влюбляюсь в тебя все сильнее. Ты - моя гордость, мое вдохновение, причина моей улыбки. Рядом с тобой я чувствую себя по-настоящему счастливым и целостным. Ты - любовь всей моей жизни. 💖'
  },
  {
    id: 4,
    originalImage: '/4-orig.JPG',
    generatedImage: '/4-gen.png',
    movieTitle: 'Искупление',
    characters: 'Сесилия и Робби',
    letter: 'Моя родная, как герои Искупления, наша любовь сильнее любых обстоятельств и расстояний. Каждое мгновение с тобой драгоценно, каждое слово значимо, каждый взгляд наполнен смыслом. Ты - мое искупление, мой свет в темноте, моя надежда и вера. С тобой я готов преодолеть что угодно, потому что ты стоишь всего. Моя вечная любовь принадлежит только тебе. 💫'
  },
  {
    id: 5,
    originalImage: '/5-orig.JPG',
    generatedImage: '/5-gen.png',
    movieTitle: 'Отчаянные домохозяйки',
    characters: 'Габриэль и Карлос Солис',
    letter: 'Принцесса, как Габриэль и Карлос, мы доказываем, что любовь может преодолеть все: трудности, испытания, даже тюрьму! Шучу, конечно(но если, что будем сидеть вместе) 😄 Но серьезно - ты моя королева, мое сокровище, причина, по которой я стремлюсь быть лучше. Твоя красота ослепительна, но еще прекраснее твоя душа. Ты делаешь меня счастливым просто тем, что существуешь. Люблю тебя всем сердцем! 👑💕'
  }
];

export default function RomanticSection() {
  const [activeCouple, setActiveCouple] = useState(0);
  const [showOriginal, setShowOriginal] = useState(true);

  const currentCouple = movieCouples[activeCouple];

  // Сброс на оригинал при смене фильма
  const handleCoupleChange = (index) => {
    setActiveCouple(index);
    setShowOriginal(true);
  };

  return (
    <section className="romantic-section">
      <div className="container">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="header"
        >
          <h1 className="title">Наша История Любви</h1>
          <p className="subtitle">Как в кино, только лучше 💕</p>
        </motion.div>

        {/* Основная карточка с изображением */}
        <motion.div
          key={activeCouple}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="image-card-wrapper"
        >
          <div className="image-card">
            {/* Изображение */}
            <div className="image-container">
              <motion.img
                src={showOriginal ? currentCouple.originalImage : currentCouple.generatedImage}
                alt={currentCouple.movieTitle}
                className="main-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Градиент снизу */}
              <div className="image-gradient" />
              
              {/* Название фильма */}
              <div className="image-info">
                <h3 className="movie-title">{currentCouple.movieTitle}</h3>
                <p className="movie-characters">{currentCouple.characters}</p>
              </div>

              {/* Метка "Оригинал" или "Мы" */}
              <div className="image-badge">
                <span>{showOriginal ? '🎬 Оригинал' : '💕 Мы'}</span>
              </div>
            </div>

            {/* Кнопка переключения */}
            <div className="switch-button-wrapper">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowOriginal(!showOriginal)}
                className="switch-button"
              >
                <svg className="switch-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Письмо */}
        <motion.div
          key={`letter-${activeCouple}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="letter-card"
        >
          <div className="letter-decoration letter-decoration-top" />
          <div className="letter-decoration letter-decoration-bottom" />
          
          <div className="letter-content">
            <div className="letter-icon">💌</div>
            <p className="letter-text">{currentCouple.letter}</p>
            <div className="letter-signature">
              <p>С любовью, твой самый счастливый человек ❤️</p>
            </div>
          </div>
        </motion.div>

        {/* Навигация по парам */}
        <div className="navigation">
          {movieCouples.map((couple, index) => (
            <motion.button
              key={couple.id}
              onClick={() => handleCoupleChange(index)}
              whileTap={{ scale: 0.9 }}
              className={`nav-button ${activeCouple === index ? 'active' : ''}`}
            >
              <img
                src={couple.originalImage}
                alt={couple.movieTitle}
                className="nav-image"
              />
              {activeCouple === index && (
                <motion.div layoutId="activeIndicator" className="active-border" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Индикатор */}
        <div className="indicator-container">
          {movieCouples.map((_, index) => (
            <div
              key={index}
              className={`indicator ${activeCouple === index ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* Финальное сообщение */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="final-message"
        >
          <p className="hint-text">
            Нажми на круглую кнопку, чтобы увидеть нас вместо героев 🎭
          </p>
          <p className="love-text">Ты и Я — самая красивая история любви! 💕</p>
        </motion.div>
      </div>
    </section>
  );
}
