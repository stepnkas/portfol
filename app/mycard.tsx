"use client"
import React from "react";
import { Card, Divider } from "antd";
import { Typography } from "antd";
import styles from "./page.module.css";

const { Title } = Typography;

interface ProjectCard {
  glav: string;
  description: string;
}

const MyCard: React.FC<ProjectCard> = ({ glav, description }) => {
  return (
      <Card className={styles.card_content}>
        <h3>{glav}</h3>
        <p>{description}</p>
      </Card>
  );
};

export default MyCard;
