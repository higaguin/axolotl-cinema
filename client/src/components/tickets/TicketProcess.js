import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

class TicketProcess extends React.Component {
    state= { number_ticket: 0 }

    render() {
        const { number_ticket } = this.state;

        const ButtonExampleConditionals = () => (
            <Button.Group>
              <Button onClick={() => { this.setState({ number_ticket: number_ticket>0?number_ticket-1:0 }) }}>-</Button>
              <Button.Or text={number_ticket} />
              <Button positive onClick={() => { this.setState({ number_ticket: number_ticket+1 }) }}>+</Button>
            </Button.Group>
        );

        const panes = [
            { menuItem: { content: 'Selecciona Cantidad', disabled: false }, render: () => {
                return (<div class="ui center aligned text container">
                    <div class="ui bottom attached warning message">
                        <i class="warning icon"></i>
                        Select how many tickets do you want
                    </div>
                    <ButtonExampleConditionals />
                </div>);
            } },
            { menuItem: { content: 'Escoge Lugares', disabled: true }, render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: { content: 'Confirma Compra', disabled: true }, render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        ];

        return (<Tab panes={panes} />);
    }
}

export default TicketProcess;