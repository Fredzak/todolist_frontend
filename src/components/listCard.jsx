function card(props) {
    return (
        <div className="box-holder bg-blue-500">
            <div className="card-title-holder">
                <span className="card-check mr-3">
                    <input type="checkbox"  name="" id="" />
                </span>
                <span className="card-title mr-3">
                    {props.title}
                </span>
                <span className="card-edit text-sm ">
Edit
                </span>
            </div>
            <div className="card-descrpition">
                {props.description}
            </div>
            <div className="card-footer">
                <span className="card-expire tags mr-3">
                    {props.expireDate}
                </span>
                <span className="card-date tags">
                    2 hours ago
                </span>
            </div>
        </div>
    )
}
export default card