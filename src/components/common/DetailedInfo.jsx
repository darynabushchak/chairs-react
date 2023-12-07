import FeedingTable from "../../images/feeding_table.png";


export default function DetailedInfo(props) {
    return (
        <>
        <div className={props.className}>
            <img src={FeedingTable} alt="" className="chairImage"/>
            <h4>{props.title}</h4>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> 
                <p>Sed euismod libero auctor metus congue, a finibus nisi cursus.</p> 
                Nullam et ultricies ex. Nunc eget nunc ac arcu feugiat bibendum. 
            </section>
        </div>
        </>
    )
}