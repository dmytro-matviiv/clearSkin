import './Explanation.css';
import React from 'react';
import Explanation_image1 from '../../assets/Explanation1.jpg';
import Explanation_image2 from '../../assets/Explanation2.png';

const Explanation = () => {
  return (
    <div  className="explanation_content">
      {/* Блок 1: Картинка зліва, текст справа */}
      <a className='rivne'> RIVNE</a>
      <div className="explanation_block">

        <div className="explanation_text">
          <div className="button_wrapper">
            <a href="https://www.instagram.com/royalskin_rivne/" className="red-button">Записатися</a>
          </div>
          <h2>Мікронідлінг</h2>
          <p>Мікронідлінг – це точковий (фракційний) вплив на шкіру мікроскопічних голок з лазерним заточенням.
            Тому він має кілька назв, одна з яких – фракційна мезотерапія. Його умовно поділяють на дві великі категорії:</p>
        </div>
        <div className="explanation_image_wrapper">
          <img className="explanation_image" src={Explanation_image1} alt="Пояснення 1" />
        </div>
      </div>

      <hr className='hr' />

      {/* Блок 2: Текст зліва, картинка справа */}
      <div className="explanation_block reverse">
        <div className="explanation_text">
          <h2>Ламінування вій та брів</h2>
          <p>Яскравий представник процедур, які забезпечують не лише ефект миттєвого перетворення, а й довгострокові результати.
            Ця техніка стала популярною завдяки здатності зробити обличчя яскравішим та виразнішим. Але що таке процедура ламінування,
            які плюси та мінуси вона дає, скільки тримається ефект? У цьому матеріалі ми розглянемо як роблять
            ламінування брів і вій, що для цього потрібно, як доглядати брови і вії після ламінування та багато інших нюансів.</p>
        </div>
        <div className="explanation_image_wrapper">
          <img className="explanation_image" src={Explanation_image2} alt="Пояснення 2" />
        </div>
      </div>

      <hr className='hr' />
    </div>
  );
};

export default Explanation;
