import React from 'react'

const ImageDetail=({ children, title, subtitle })=> {
    return (
        <div className="bann">
            <h1>{title}</h1>
        <div />
      <p>{subtitle}</p>
      {children}
        </div>
    )
}

export default ImageDetail;
