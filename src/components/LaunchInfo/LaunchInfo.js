import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import LaunchCard from './LaunchCard';
import './styles.css'
import LaunchSearch from './LaunchSearch';
import { Pagination } from 'antd';

const DEFAULT_PAGE_NUM = 1
const DEFAULT_PAGE_SIZE = 2

const LaunchInfo = (props) => {
    // make api call
    const [pageNum, setPageNum] = useState(DEFAULT_PAGE_NUM)
    const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
    const initialParams = ''
    const [launchQueryParams, setLaunchQueryParams] = useState(initialParams)
    const query = gql`{
        launchesPast(limit: ${pageSize}, offset: ${(pageNum - 1) * pageSize}, find: {${launchQueryParams}}) {
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

    useEffect(() => {
        setPageNum(DEFAULT_PAGE_NUM)
        setPageSize(DEFAULT_PAGE_SIZE)
    }, [launchQueryParams])

    return (
        <div className='wrapper'>
            <h1>Space X Past Rocket Launches 🚀</h1>
            <div className="buttons-div">
                <LaunchSearch setLaunchQueryParams={setLaunchQueryParams} />
            </div>
            <div className='margin-bottom'>
                {launches ?
                    launches.launchesPast.map((l) => <LaunchCard launch={l} />)
                    : <LaunchCard launch={null} />
                }
            </div>
            <Pagination pageSize={pageSize} pageSizeOptions={[1, 2, 4, 10, 20, 50, 100]} current={pageNum} total={100} onChange={(newPageNum) => setPageNum(newPageNum)} onShowSizeChange={(newPageSize) => setPageSize(newPageSize)} />
        </div>
    )
}

export default LaunchInfo