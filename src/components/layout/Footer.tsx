const year = new Date().getFullYear();

function Footer() {
    return (
        <footer className='top-8 p-8'>
            <hr />
            <p className="text-sm p-4 text-gray-500">Big Little Concepts &copy; {year}</p>
        </footer>
    );
}

export default Footer;