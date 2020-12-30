import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component'

const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.slice(0,4).map(({id, ...other}) => (
                    <CollectionItem key = {id} {...other} />
                ))
            }
        </div>
        
    </div>
)

export default PreviewCollection;