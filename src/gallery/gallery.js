
import classes from './gallery.module.css'
const Gallery=({data},props)=>{
    return (
        <div>
            <div className={classes.row}>
                {data.map((image)=>
                <div key={image.id}>
                    <div className={classes.box}>
                    <img alt={`${props.search} snap`} className={classes.image} src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}/>

                    </div>
                    
                   
                </div>
                )}
                

            </div>
            Simple div
            <div>

            </div>
        </div>
    )

}
export default Gallery