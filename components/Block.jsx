export default function Block({data}){
    return (
        <div className="block">
            <div className="block-header">
                <h3>{data.title}</h3>
                <h5>{data.employer}</h5>
                <small>{data.dates}</small>
            </div>
            <div className="block-body">
                {data.description}
            </div>
        </div>
    )
}