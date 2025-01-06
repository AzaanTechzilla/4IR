import H1 from "../../landing/Typography/H1";
import Para from "../../landing/Typography/Para";

const Banner=({children, classname})=> {
    return(
        <>
        <div className={classname}>
            {children}
        </div>
        </>
    )
}
const BannerContent=({children, classname})=>{
    return(
        <>
        <div className={classname}>{children}</div>
        </>
    )
}
const BannerBody=({children, classname}) =>{
    return(
        <>
        <div className={classname}>
            {children}
        </div>
        </>
    )
}
const Heading=({title, titleclassname})=> {
    return(
        <>
        <H1 title={title} className={titleclassname} />
        </>
    )
    
}
const Paragrapgh=({title, paraclassname})=> {
    return(
        <>
        <Para title={title} className={paraclassname} />
        </>
    )
    
}
Banner.BannerBody = BannerBody;
Banner.Heading = Heading;
Banner.Para = Paragrapgh;
Banner.BannerContent = BannerContent;
export default Banner;