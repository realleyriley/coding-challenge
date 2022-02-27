import { Card } from "antd"

const LaunchCard = ({ launch }) => {
    if (launch === null) {
        return <Card loading={true} />
    }

    const launchID = `Launch #${launch.id}`
    console.log(launch.launch_date_utc);
    const date = new Date(launch.launch_date_utc)
    const launchDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

    const title = <div className='launchcard-title'><div>{launchID}</div><div>{launchDate}</div></div>
    return (
        <Card title={title}>
            <div>
                <p>Rocket Name: {launch.rocket.rocket_name}</p>
                <p>Rocket Type: {launch.rocket.rocket_type}</p>
            </div>
            {/* TODO: open in new tab icon */}
            <p><a href={launch.links.video_link} target='_blank'>Video Link</a></p>
        </Card>
    )
}

export default LaunchCard
