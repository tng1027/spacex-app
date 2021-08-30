import { Modal, Button, Container, List, ListItem, Tab, Header, Icon } from 'semantic-ui-react'
import { LaunchModalLinks } from './LaunchModalLinks'
import { LaunchModalGallery } from "./LaunchModalGallery"
import { LaunchModalRocket } from './LaunchModalRocket';

import dayjs from 'dayjs'

export const LaunchModal = (props) => {
    const { open, onClose, launch } = props;
    const { mission_name, launch_date_local, launch_site, details, links, rocket } = launch;
    const { site_name_long } = launch_site;
    const { flickr_images } = links;

    const launchDate = dayjs(launch_date_local).format('MM/DD/YYYY HH:mm');

    const panes = [
        {
            menuItem: 'Rocket',
            render: () => <Tab.Pane attached={false}><LaunchModalRocket rocket={rocket} /></Tab.Pane>,
        },
        {
            menuItem: 'Links',
            render: () => <Tab.Pane attached={false}><LaunchModalLinks links={links} /></Tab.Pane>,
        },
        {
            menuItem: 'Gallery',
            render: () => <Tab.Pane attached={false}><LaunchModalGallery images={flickr_images} /></Tab.Pane>,
        }
    ]

    return <Modal
        dimmer="blurring"
        open={open}
        onClose={onClose}
    >
        <Modal.Header>Launch Information</Modal.Header>
        <Modal.Content>
            <Container>
                <Header as="h3">{mission_name}</Header>
                <List>
                    <ListItem><span><Icon name="map marker alternate"></Icon> {site_name_long}</span></ListItem>
                    <ListItem><span><Icon name="time"></Icon> {launchDate}</span></ListItem>
                    {details && <ListItem>
                        <p>{details}</p>
                    </ListItem>}
                </List>
            </Container>
            <Tab style={{ marginTop: 10 }} menu={{ secondary: true, pointing: true }} panes={panes} />
        </Modal.Content>
        <Modal.Actions>
            <Button positive onClick={onClose}>
                Close
            </Button>
        </Modal.Actions>
    </Modal>
}