import { Button } from "@react-email/button";
import { Head } from "@react-email/head"
import { Img } from "@react-email/img"
import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/tailwind"
import { Preview } from '@react-email/preview';
import { Container } from '@react-email/container';
import { Row } from "@react-email/row";
import { Hr } from '@react-email/hr';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import { Column } from '@react-email/column';
import * as React from "react";

export default function Email() {
    return (
        <Html>
            <Preview>{"Liceu Franco Brasileiro"}</Preview>
            <Head />
            <Tailwind >
                <Container className="bg-gray-50 flex mx-auto font-sans" style={"border"}>
                    <Row className="my-8 grid justify-items-center" >
                        <Column>
                            <a href="https://liceufranco.com.br/" target={"_blank"} style={{ textDecorator: "none" }}> <Img src="https://placehold.co/100" alt="Logotipo" /></a>
                        </Column>
                    </Row>

                    <Row className="px-8">
                        <Hr />
                    </Row>
                    <Section className="px-8">
                        <Text className="text-4xl font-semibold text-[#004a80]">
                            Olá, Jorge William
                        </Text>
                        <Text className="text-base text-[#535353]">
                            Infelizmente o tempo limite para a realização da matricula do curso
                            Nome do Curso expirou.
                            Retorne ao portal e efetue uma nova inscrição.
                        </Text>
                        <Row>
                            <Text className="text-base mt-8 font-semibold text-[#535353]">
                                Abraços, <br />Equipe Liceu Franco Brasileiro
                            </Text>
                        </Row>
                    </Section>
                    <Section className="text-center mt-[32px] mb-[32px]">
                        <Button
                            style={{
                                fontSize: '16px',
                                textDecoration: 'none',
                                textAlign: 'center' as const,
                                display: 'block', padding: "0.7rem 1.7rem", color: "#004a80", border: "1px solid  #004a80", borderRadius: "25px", width: "8rem", height: "1.7rem"
                            }}
                            href="#"
                            className="align-middle "
                        >
                            Ir para o portal
                        </Button>
                    </ Section>
                    <Row className="px-8">
                        <Hr />
                    </Row>
                    <Container className="text-center">
                        <Column className="grid justify-items-center justify-center mx-auto">
                            <Text className="text-xs w-80 mx-8 text-[#858585]" >
                                Por favor, pedimos que você não responda esse e-mail, pois se trata
                                de uma mensagem automática.
                            </Text>
                        </Column>
                    </Container>
                    <Container className='bg-[#A71C20] '>
                        <Row >

                            <Section className="my-8 grid justify-items-center" >
                                <Img className="" style="" src="https://placehold.co/100" alt="Logotipo" height="" />
                            </Section>

                        </Row>
                        <Row >
                            <Container className='bg-[#A71C20] flex justify-center ' >
                                <Column>
                                    <Img className="m-2" style="" src="https://placehold.co/50" alt="Logotipo" height="" />
                                </Column>
                                <Column>
                                    <Img className="m-2" style="" src="https://placehold.co/50" alt="Logotipo" height="" />
                                </Column>
                                <Column>
                                    <Img className="m-2" style="" src="https://placehold.co/50" alt="Logotipo" height="" />
                                </Column>
                                <Column>
                                    <Img className="m-2" style="" src="https://placehold.co/50" alt="Logotipo" height="" />
                                </Column>
                            </Container>
                        </Row>
                    </Container>
                    <Row className="bg-[#004A80]" style={{ height: "16px", maxWidth: "600px" }}></Row>
                </Container>
            </Tailwind>
        </Html >
    );
}
