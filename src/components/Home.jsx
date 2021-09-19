import Blog from "./Blog";

function Home(){
    return (
        <div>
            <Blog 
                title="Fortigate configuration"
                desc="Introduction to firewalls"
            />
            <Blog 
                title="Flutter mobile clean arch"
                desc="The best way to organize your code"
            />
            <Blog 
                title="Introduction to cryptography"
                desc="A brief discussion about modern crypto"
            />
        </div>
    );
}


export default Home;