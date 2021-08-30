import { Image, Container, Grid, Header, Icon } from 'semantic-ui-react'

export const LaunchModalGallery = (props) => {
    const { images } = props;

    console.log(images)

    if (!images || images.length === 0) {
        return <Header as='h3' icon textAlign='center'>
            <Icon name='images outline' />
            <Header.Content>Empty gallery</Header.Content>
        </Header>
    }

    return <Container fluid>
        <Grid columns="3">
            {images.map((imageUrl, index) => <Grid.Column><Image key={`launch-image-${index}`} src={imageUrl} /></Grid.Column>)}
        </Grid>
    </Container>
}