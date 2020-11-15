import React from 'react'
import { Helmet } from 'react-helmet'

const Layout = ({ children, className, title, description }) => {
    return (
        <div className={`max-w-5xl mx-auto pt-4 ${className}`} >
            <Helmet>
                <title>{title}</title>
                <meta name={description} content="Inicio" />
            </Helmet>
            {children}
        </div>
    )
}

Layout.defaultProps = {
    className: "",
    title: "Page | RCA",
    description: "description"
}

export default Layout
