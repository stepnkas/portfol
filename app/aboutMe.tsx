"use client";
import { Descriptions, Divider, Flex, List } from "antd";
import { Header } from "antd/es/layout/layout";
import styles from "./page.module.css";


const AboutMe = () => {

    return (
        <>
            <Flex className={styles.about} vertical>
                <Header style={{backgroundColor:"#569ea3", textAlign:"center"}}>
                    Компитенции
                </Header>
                <Flex>
                    <List>
                        <Divider>
                            Личностные качества: пунктуальный, спокойный и т.д.
                        </Divider>
                        <Divider>
                            Профессиональные качества: пишу на C#, и т.д.
                        </Divider>
                        <Divider>
                            Другое: люблю слушать музыку и играть за компьютером с друзьями
                        </Divider>
                    </List>
                </Flex>
            </Flex>
        </>
    )
}

export default AboutMe;