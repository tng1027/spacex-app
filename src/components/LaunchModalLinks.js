import { Embed, Container, List, ListItem } from 'semantic-ui-react'

export const LaunchModalLinks = (props) => {
    const { links } = props;
    const { article_link, video_link } = links;

    let videoId = '';
    const videoLinkArr = video_link.split('v=');
    if (videoLinkArr.length > 0) {
        videoId = videoLinkArr[videoLinkArr.length - 1];
    }

    return <Container fluid>
        <List>
            {video_link && <ListItem>
                <Embed
                    id={videoId}
                    placeholder='/spacex.png'
                    source='youtube'
                />
            </ListItem>}

            {article_link && <ListItem>
                <Embed
                    icon='right circle arrow'
                    placeholder='/spacex.png'
                    url={article_link}
                />
            </ListItem>}
        </List>
    </Container>
}