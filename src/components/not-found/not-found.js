import './not-found.scss';

import React from "react";

export const NotFound = ({ render }) => {
  return (
    <div className="not-found" style={{display: render ? 'block' : 'none'}}>
      <div className="not-found__img">
      </div>
      <h2 className="not-found__title">
        Ничего не найдено
      </h2>
      <p className="not-found__text">
        К&nbsp;сожалению по&nbsp;вашему запросу
        ничего не&nbsp;найдено.
      </p>
    </div>
  );
}
