import React, {FormEvent, useState} from "react";
import {Button, Col, Container, Form, FormGroup, Input, Row} from "reactstrap";
import api from "../../../services/api";
import {BlocoSearchPlayer} from "./style";

interface CodPlayerRepositories {
    br: {
        kills: string;
        kdRatio: number;
        wins: number;
    }
}

const PageHome: React.FC = () => {

    const [codPlayer, setCodPlayer] = useState('');
    const [codPlataform, setCodPlataform] = useState('battle');
    const [playerInfo, setPlayerInfo] = useState<CodPlayerRepositories>()


    async function handlePlayer(event: FormEvent<HTMLFormElement>) {

        event.preventDefault()

        try {
            const response = await api.get(`warzone/${codPlayer.replace('#', '%23')}/${codPlataform}`)
            const player = response.data
            setPlayerInfo(player)
            setCodPlayer('')
            setCodPlataform('')

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <BlocoSearchPlayer>
            <Container>
                <Row>
                    <Col lg={12} sm={12} md={12}>
                        <div className="container-form-result">
                            <div className="form-result">
                                <Form onSubmit={handlePlayer} className="form">
                                    <FormGroup>
                                        <Input type="text" name="Player" placeholder="Coloque seu nome"
                                               value={codPlayer}
                                               onChange={e => setCodPlayer(e.target.value)}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="select" value={codPlataform}
                                               onChange={(e) => setCodPlataform(e.target.value)}>
                                            <option value="battle" label="Battle.net">
                                                Battle
                                            </option>
                                            <option value="psn" label="PSN">
                                                PSN
                                            </option>
                                            <option value="xbl" label="Xbox live">
                                                Xbox live
                                            </option>
                                            <option value="acti" label="Activision">
                                                Activision
                                            </option>
                                        </Input>
                                    </FormGroup>
                                    <Button color="danger" type="submit">Pesquisar</Button>
                                </Form>
                                {playerInfo && (
                                    <div className="player-informs">
                                        <p>KD: {playerInfo.br.kdRatio.toFixed(2)}</p>
                                        <p>Vitórias: {playerInfo.br.wins}</p>
                                        <p>Kills: {playerInfo.br.kills}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </BlocoSearchPlayer>
    )
}

export default PageHome