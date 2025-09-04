import React from 'react'

const LazyLoaded = () => {
    return (
        <div style={{ padding: "10px", background: "#e0f7fa", borderRadius: "8px" }}>
            <h3>I was loaded lazily </h3>
            <p>This component was split out and only loaded when needed.</p>
        </div>
    )
}

export default LazyLoaded
