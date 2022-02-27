import React from 'react'
import { useQuery, gql } from '@apollo/client';
import LaunchCard from './LaunchCard';
import './styles.css'

const LaunchInfo = (props) => {
    // make api call
    const q = gql`{
        launchesPast(limit: 3) {
          links {
            video_link
            flickr_images
          }
          rocket {
            rocket_name
            rocket_type
          }
          id
          details
          launch_date_utc
          launch_success
        }
      }
      `

    const { data: launches } = useQuery(q)

    if (launches) {
        console.log(typeof (launches));
        console.log(launches.launchesPast.length);
    }

    return (
        <div>
            <h1>Space X Past Rocket Launches 🚀</h1>
            <div className='margin-bottom'>
                {launches ?
                    launches.launchesPast.map((l) => <LaunchCard launch={l} />)
                    : <LaunchCard launch={null} />
                }
            </div>
        </div>
    )
}

export default LaunchInfo