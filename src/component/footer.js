function Footer() {
    const today = new Date();
    const year = today.getFullYear();

    return ( 
        <div className=" bg-warning">
            <footer className="py-3 mt-4 ">
                <ul className="nav justify-content-center  pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
                <p className="text-center text-muted">© {year} Company, Inc</p>
            </footer>
        </div>
     );
}

export default Footer;