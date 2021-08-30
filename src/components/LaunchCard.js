import { useState } from 'react';
import { Card, Image, List, Label } from 'semantic-ui-react'
import TextEllipsis from 'react-text-ellipsis';

import { LaunchModal } from './LaunchModal'
import dayjs from 'dayjs';

export const LaunchCardLink = (props) => {
    const { type, link } = props;
    const iconName = type === 'video' ? 'play circle' : 'newspaper';
    const content = type === 'video' ? 'View Video' : 'View Article'

    return <Label as='a' href={link} target="_blank" content={content} icon={iconName} />
}

export const LaunchCard = (props) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const { launch } = props;
    const { mission_name, launch_date_local, links, details } = launch;
    const { flickr_images, video_link, article_link } = links;

    const launchDate = dayjs(launch_date_local).format('MM/DD/YYYY HH:mm');
    const thumbnailImage = flickr_images && flickr_images.length > 0 ? flickr_images[0] : '/spacex.png';

    return <>
        <Card style={{ width: '100%' }}>
            <Image src={thumbnailImage} wrapped ui={false} />
            <Card.Content>
                <Card.Header as="a" onClick={() => setIsOpenModal(true)}>{mission_name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{launchDate}</span>
                </Card.Meta>
                {details && <Card.Description>
                    <TextEllipsis
                        lines={5}
                        tag={'p'}
                        ellipsisChars={'...'}
                        debounceTimeoutOnResize={200}
                        useJsOnly={true}>{details}
                    </TextEllipsis>
                </Card.Description>}
            </Card.Content>
            <Card.Content extra>
                <List horizontal>
                    {(video_link) && <List.Item>
                        <LaunchCardLink type="video" link={video_link} />
                    </List.Item>}
                    {(article_link) && <List.Item>
                        <LaunchCardLink type="news" link={article_link} />
                    </List.Item>}
                </List>
            </Card.Content>
        </Card>

        <LaunchModal open={isOpenModal} onClose={() => setIsOpenModal(false)} launch={launch}></LaunchModal>
    </>
}