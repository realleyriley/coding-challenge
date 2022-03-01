import { Card, Carousel, Image } from "antd"

const LaunchCard = ({ launch }) => {
    if (launch === null) {
        return <Card loading={true} />
    }

    const launchID = `Launch #${launch.id}`
    const date = new Date(launch.launch_date_utc)
    const launchDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} 🕐`

    const title = <div className='launchcard-title'><div>{launchID}</div><div>{launchDate}</div></div>
    return (
        <Card title={title}>
            <div className="card-content">
                <div>
                    <p>Rocket Name: {launch.rocket.rocket_name}</p>
                    <p>Rocket Type: {launch.rocket.rocket_type}</p>
                    <p>Launch Success? {launch.launch_success ? ' Yes😁' : ' no😔'}</p>
                    {/* TODO: open in new tab icon */}
                    <p><a href={launch.links.video_link} target='_blank'>Video Link</a></p>
                </div>
                <div className="image-carousel">
                    {launch.links.flickr_images.map((uri) => <Image src={uri} height={200} />)}
                </div>
            </div>
            <div>
                <h3>📰 Details</h3>
                <span>{launch.details || 'no details '}</span>
            </div>
        </Card>
    )
}

export default LaunchCard
