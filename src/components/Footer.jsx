import React from 'react'
import '../assets/style/footer.scss';

function Footer() {
    return (
        <footer>
            <p className="copy-right">Copy right &copy; 2021</p>
            Created By <a className='author' href="https://www.linkedin.com/in/eng-ahmedradi" target={'_blank'} rel="noreferrer">Ahmed Radi</a>
        </footer>
    )
}

export default Footer