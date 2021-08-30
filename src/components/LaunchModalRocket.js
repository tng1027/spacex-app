import { Container, List, ListItem, Header } from 'semantic-ui-react'
import numeral from 'numeral';

export const LaunchModalRocket = (props) => {
    const { rocket_name, rocket } = props.rocket;
    const { cost_per_launch, company, country, payload_weights, height, mass, description, wikipedia } = rocket;

    console.log({ rocket, rocket_name })

    const contentList = [
        {
            icon: 'dollar',
            header: 'Cost per Launch',
            value: numeral(cost_per_launch).format('$ 0,0')
        },
        {
            icon: 'building outline',
            header: 'Company',
            value: company
        },
        {
            icon: 'flag outline',
            header: 'Country',
            value: country
        },
        {
            icon: 'space shuttle',
            header: 'Payload Weights',
            value: payload_weights ? payload_weights.map(i => `${numeral(i.kg).format('0,0')} kg`).join(' | ') : null
        },
        {
            icon: 'space shuttle',
            header: 'Height',
            value: height ? `${numeral(height.meters).format('0,0')} m` : null
        },
        {
            icon: 'space shuttle',
            header: 'Mass',
            value: mass ? `${numeral(mass.kg).format('0,0')} kg` : null
        },
        {
            icon: 'edit outline',
            header: 'Description',
            value: description
        },
        {
            icon: 'wikipedia w',
            header: 'Wikipedia',
            value: wikipedia,
            type: 'a'
        }
    ]

    return <Container>
        <Header as="h3">{rocket_name}</Header>
        <List>
            {contentList
                .filter(i => i.value)
                .map(i => <ListItem>
                    <List.Icon name={i.icon} size='small' verticalAlign='middle' /><List.Content>
                        <List.Description>{i.header}</List.Description>
                        <List.Header as={i.type || 'span'}>{i.value}</List.Header>
                    </List.Content>
                </ListItem>)}
        </List>
    </Container>
}