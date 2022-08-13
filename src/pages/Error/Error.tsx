import './ErrorScss/Error.css';

export default function Error(){
    return(
        <div className="error">
            <div className="scene">
                <span>Error 404</span> Oh no!
            </div>
            <div className="main">
                <div className="subtitle">
                    <span>Page not found 🔎</span>
                </div>
                <main>
                    <div className="text">
                        We are sorry, but the page you are looking for does not exist. <br />
                        You could return to the homepage or reload this page.
                    </div>
                    <a href='/' className='gohome'>Go home</a>
                </main>
            </div>
        </div>
    )
}