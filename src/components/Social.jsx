import React from 'react'
import '../assets/style/social.scss';
import { socialInfo } from '../staticData/social';

function Social() {
    return (
        <div className='card-container'>
            <div className="container">
                <div className="row">
                    {socialInfo.map(data => (
                        <div className="col-lg-4 col-md-6 col-sm-12 card-content" key={data.name}>
                            <a href="https://www.facebook.com/INeedDev/" target={'_blank'} rel="noreferrer">
                                <div className="card">
                                    <div className={`card__icon ${data.name}`}>
                                        {data.icon}
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Social