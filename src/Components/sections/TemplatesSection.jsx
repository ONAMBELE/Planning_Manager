import CardCategorie from "./cardCategorie"
import "./templatesSection.css"


export default function TemplatesSection() {

    return(
        <div className="templatesSection">
            <header>
                <h2>Featured categories</h2>
                <div>
                    <input type="search" name="search" id="search" placeholder="Find Template"/>
                    <img src="/search.png" alt="" />
                </div>
            </header>
            <div className="content">
                <CardCategorie 
                    image="/img1.jpg"
                    name="Anime"
                />
                <CardCategorie
                    image="/img1.jpg"
                    name="Anime"
                />
                <CardCategorie
                    image="/img1.jpg"
                    name="Anime"
                />
                <CardCategorie
                    image="/img.jpg"
                    name="Anime"
                />
                <CardCategorie
                    image="/img1.jpg"
                    name="Anime"
                />
                <CardCategorie
                    image="/img1.jpg"
                    name="Voiture"
                />
                <CardCategorie
                    image="/img.jpg"
                    name="Anime"
                />
            </div>
        </div>
    )
    
}