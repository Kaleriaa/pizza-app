import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={503}
        viewBox="0 0 280 503"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <circle cx="140" cy="121" r="110" />
        <rect x="234" y="277" rx="0" ry="0" width="4" height="8" />
        <rect x="0" y="276" rx="10" ry="10" width="280" height="100" />
        <rect x="7" y="239" rx="9" ry="9" width="265" height="23" />
        <rect x="113" y="390" rx="29" ry="29" width="163" height="40" />
        <rect x="6" y="393" rx="7" ry="7" width="78" height="31" />
    </ContentLoader>
)
