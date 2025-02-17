"use client";
import React, { FormEvent, useEffect, useState } from "react";
import styles from "./page.module.css";
import { Card, Layout, List } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import MyCard from "./mycard";
import Item from "antd/es/list/Item";
import AboutMe from "./aboutMe";
import { Skill } from "./models/Skill";
import { User } from "./models/User";
import RegisterForm from "./RegisterForm";

export default function Home() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [title, setTitle] = useState("");
  const [dis, setDis] = useState("");
  const [user, setUser] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");

  const USER_ADMIN = 'Step';

  useEffect(() => {

    async function getUser() {
      let userlocal = localStorage.getItem("user");
      
      

      console.log(userlocal)
      if (userlocal != null) {
        var userm: User = JSON.parse(userlocal);
        if ((userm.name === USER_ADMIN)) {
          setRole('admin');
        } else {
          setRole('user');
        }
      }

    }
    getUser();

    async function fetchSkills() {
      const res = await fetch("/api/skills");
      const data = await res.json();

      const role = await

        setSkills(data);
    }
    fetchSkills();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch("/api/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        dis
      }),
    });

    if (res.ok) {
      const newSkill = await res.json();
      setSkills((prev) => [...prev, newSkill]);
      setTitle("");
      setDis("");
    } else {
      const errorData = await res.json();
      console.error("Ошибка при добавлении навыка", errorData);
    }
  }

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
            Привет, я Каськов Степан, набирающийся опыта программист, который
            создаёт пластичные и полезные приложения и сайты. Сдесь вы можете
            увидеть проекты, демострирующие мои навыки в различных технологиях,
            над которыми я работал (или работаю). А также мои контакты для
            работы с вами. И спасибо за внимание.
          </p>
        </div>
        <h2 id="projects" className={styles.gggc}>
          Карточки моих проектов
        </h2>
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
          {skills.length === 0 ? (
            <></>) : (
            skills.map((skill) => (
              <MyCard key={skill.id} glav={skill.title} description={skill.dis} />
            ))
          )
          }
        </div>

        { role === 'admin' && (
          <div className={styles.block_form}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Название навыка"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Описание навыка"
              value={dis}
              onChange={(e) => setDis(e.target.value)} // Обновляем состояние описания
              required
            />
            <button type="submit" className={styles.submitButton}>Добавить навык</button>
          </form>
        </div>
        )}
        { role !== 'admin' && (
          <></>
        )}

        <div id="comp" className={styles.introduction_footer}>
          <AboutMe />
        </div>
        
        <div>
          <RegisterForm/>
        </div>

        <div id="contact" className={styles.introduction_footer}>
          <List
            className={styles.list_footer}
            header={<div>Контакты</div>}
            bordered
          >
            <Item>001gradus100@mail.com</Item>
            <Item>@ztepwrer (telegram)</Item>
            <Item>sungradus1@gmail.com</Item>
            <Item>+79999999999</Item>
          </List>
        </div>
      </Layout>
    </>
  );
}
