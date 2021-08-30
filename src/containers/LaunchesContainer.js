import { useQuery } from '@apollo/react-hooks'
import { GET_LAUNCHES } from '../graphql/get-launches';

import { LaunchCard } from '../components/LaunchCard';
import { Container, Header, Grid } from 'semantic-ui-react'

export const LaunchesContainer = () => {
    const { data: { launchesPast = [] } = {} } = useQuery(GET_LAUNCHES, {
        variables: { limit: 12 }
    });

    return <Container style={{ padding: 20 }}>
        <Grid columns={3}> {
            launchesPast && launchesPast.map((launch, index) => <Grid.Column key={`launch-${index}`}>
                <LaunchCard
                    launch={launch}
                /> </Grid.Column>)
        } </Grid>
    </Container>
}