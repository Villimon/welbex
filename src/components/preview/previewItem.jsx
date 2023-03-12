import React from "react";





const PreviewItem = (props) => {
    return (
        <div className="right-preview__column">
            <div className="right-preview__item item-preview">
                <div className="item-preview__body">
                    <h2 className="item-preview__title">{props.item.title}</h2>
                    <p className="item-preview__text">{props.item.text}</p>
                </div>
            </div>
        </div>
    );
}

export default PreviewItem;
