import gql from 'graphql-tag';

export const GET_LAUNCHES = gql`
    query launches($limit: Int!) {
        launchesPast(limit: $limit) {
            mission_name
            launch_date_local
            launch_site {
              site_name_long
            }
            links {
              article_link
              video_link
              flickr_images
            }
            ships {
              name
              home_port
              image
            }
            details
            rocket {
              rocket_name
              rocket {
                cost_per_launch
                company
                country
                name
                payload_weights {
                  kg
                }
                type
                height {
                  meters
                }
                mass {
                  kg
                }
                description
                wikipedia
              }
            }
        }
    }
`