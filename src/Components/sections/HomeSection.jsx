import CardHomeRecently from "./cardHomeRecently"
import "./homeSection.css"


export default function HomeSection() {
    
    return (
        <div className="HomeSection">
            <div className="recentlyViewed-Home">
                <h3>
                    <img src="/time.png" alt="" />
                    <p>Recently viewed</p>
                </h3>
                <div className="content">
                    <CardHomeRecently
                        name="image"
                        image="/img1.jpg"
                    />
                     <CardHomeRecently
                        name="image"
                        image="/img1.jpg"
                    />
                     <CardHomeRecently
                        name="image"
                        image="/img.jpg"
                    />
                     <CardHomeRecently
                        name="image"
                        image="/img1.jpg"
                    />
                    <CardHomeRecently
                        name="image"
                        image="/img1.jpg"
                    />
                </div>
            </div>
            <div className="links">
                <h3>Links</h3>
                <div>
                    <button>
                        +
                    </button>
                    <p>Create a board</p>
                </div>
            </div>
        </div>
    )

}
