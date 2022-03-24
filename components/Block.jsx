export default function Block({data}){
    return (
        <div className="block">
        <div className="block-header">
            <h3>{data.title}</h3>
        </div>
        <div className="block-body">
            {data.body}
        </div>
        </div>
    )
}