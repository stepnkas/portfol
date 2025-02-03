import React from "react";
import styles from "./page.module.css";
import { Card, Layout, List } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import MyCard from "./mycard";
import Item from "antd/es/list/Item";
import AboutMe from "./aboutMe";

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <Header className={styles.headerst}>
          <div className={styles.header_conteiner}>
            <Link href="/" className={styles.header_content}>
              <div>Главная</div>
            </Link>
            <Link href="#about" className={styles.header_content}>
              <div>Обо мне</div>
            </Link>
            <Link href="#projects" className={styles.header_content}>
              <div>Проекты</div>
            </Link>
            <Link href="#comp" className={styles.header_content}>
              <div>Компитенции</div>
            </Link>
            <Link href="#contact" className={styles.header_content}>
              <div>Контакты</div>
            </Link>
          </div>
        </Header>
        <div className={styles.introduction}>
          <h1 id="about">Сайт программиста</h1>
          <p className={styles.gg}>
            Привет, я Каськов Степан, набирающийся опыта программист, который создаёт
            пластичные и полезные приложения и сайты. Сдесь вы можете увидеть проекты, демострирующие мои навыки в различных технологиях,
            над которыми я работал (или работаю).
            А также мои контакты для работы с вами. И спасибо за внимание.
          </p>
        </div>
        <h2 id="projects" className={styles.gggc}>Карточки моих проектов</h2>
        <div className={styles.card_conteiner}>
          <MyCard
            glav="Bookcrossing в VK-mini-app на React"
            description="Приложение для получения книг от других людей, с базой данных, где хранятся книги и пользователи."
          />
          <MyCard
            glav="Сайт о мероприятии (JavaScript, HTML, CSS, SCSS)"
            description="Сайт для отображения информации о мероприятии, с возможностью регистрации участников."
          />
          <MyCard
            glav="Сайт на .NET для записи к доктору"
            description="Приложение для записи к врачу, использующее C#, архитектуру MVC и базу данных с авторизацией."
          />
          <MyCard
            glav="Функционирующая база данных на SQL"
            description="База данных для записи врачей, пациентов и их заболеваний с 3-й нормальной формой."
          />
          <MyCard
            glav="Cайт на WordPress"
            description="Сайт на платформе WordPress с базой данных на Spaceweb."
          />
          <MyCard
            glav="Создание деканата на Windows Forms"
            description="Приложение на C# для управления учителями, учениками и их оценками с базой данных на SQL."
          />
        </div>
        <div id="comp" className={styles.introduction_footer}>
          <AboutMe />
        </div>
        <div id="contact" className={styles.introduction_footer}>
          <List
            className={styles.list_footer}
            header={<div>Контакты</div>}
            bordered>
            <Item>
              001gradus100@mail.com
            </Item>
            <Item>
              @ztepwrer (telegram)
            </Item>
            <Item>
              sungradus1@gmail.com
            </Item>
            <Item>
              +79999999999
            </Item>
          </List>
        </div>
      </Layout>
    </>
  );
};

export default Home;
