import React from 'react'
import { useHistory } from "react-router-dom";
import { Form, Segment, Button, Divider } from 'semantic-ui-react'
import { saveEvent } from '../firebase';
import '../App.css';

const NewEvent = ({ firebaseApp }) => {
    const history = useHistory()
    const [newEvent, setNewEvent] = React.useState()
    const handleChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value })
    }

    return (
        <Segment>
            <h3 align="center">Crea un evento nuevo</h3>
            <Divider />
            <Form>
                <Form.Field>
                    <label>Nombre del evento</label>
                    <input placeholder='Nombre del evento' name='name' onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Fecha del evento</label>
                    <input placeholder='dd/mm/aaaa' name='date' onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Creado por</label>
                    <input placeholder='Creado por' name='created_by' onChange={handleChange} />
                </Form.Field>
                <Button basic color="pink" type='submit' onClick={async () => {
                    await saveEvent(firebaseApp, newEvent);
                    history.push('/events');
                }} >Crear evento</Button>
            </Form>
        </Segment>
    )
}

export default NewEvent;
