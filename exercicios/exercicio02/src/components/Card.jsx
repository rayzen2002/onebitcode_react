export default function Card(){
    return (
        <div style={{
            display: "flex",
            backgroundColor: "#d1cdcd",
            alignItems: "center",
            margin: "5rem",
            gap: "4rem",
            height: "30rem"
        }}>
            <img src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg" 
            alt="star-wars"
            style={{
                height: "40vh",
                marginLeft: "20vw",
                border: "8px,solid,#000"
            }}
             />
             <div>
             <h1 
             style={{
                fontSize: "3.5rem",
             }}
             >Poster: Star Wars(1977)</h1>
             <p
             style={{
                textAlign: "left",
                maxWidth: "30vw",
                fontSize: "1.5rem",
                
             }}
             >Set "a long time ago" in a fictional 
                universe where the galaxy is ruled by 
                the tyrannical Galactic Empire, the story
                 focuses on a group of freedom fighters known 
                 as the Rebel Alliance, who aim to destroy the
                  Empire's newest weapon, the Death Star.
            </p>
            <button
            style={{
                fontSize: "1.2rem",
                height: "4rem",
                width: "10rem",
                backgroundColor: "#232323",
                color: "#fafafa",
                borderRadius: "0.75rem",
                margin: "0 auto"
            }}
            >Buy now</button>
             </div>
             
             
        </div>
    )
}