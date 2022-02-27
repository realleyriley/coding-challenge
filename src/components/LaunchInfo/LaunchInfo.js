import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import LaunchCard from './LaunchCard';
import './styles.css'
import LaunchSearch from './LaunchSearch';

const LaunchInfo = (props) => {
    // make api call
    const initialParams = ''
    const [launchQueryParams, setLaunchQueryParams] = useState(initialParams)
    const query = gql`{
        launchesPast(limit: 4, find: {${launchQueryParams}}) {
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

    const { data: launches } = useQuery(query)


    return (
        <div>
            <h1>Space X Past Rocket Launches 🚀</h1>
            <LaunchSearch setLaunchQueryParams={setLaunchQueryParams} />
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