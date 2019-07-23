import React from "react";
import ContentLoader from "react-content-loader";

const CardPlaceholder: React.FC = props => (
  <article className="card-block">
    <ContentLoader
      height={354}
      width={300}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      style={{
        display: "block"
      }}
    >
      <rect x="0" y="-4" rx="0" ry="0" width="300" height="200" />
      <rect x="8" y="210" rx="0" ry="0" width="242" height="17" />
      <rect x="8" y="240" rx="0" ry="0" width="69" height="21" />
      <rect x="8" y="277" rx="0" ry="0" width="96" height="17" />
      <circle cx="201" cy="285" r="15" />
      <circle cx="269" cy="285" r="15" />
      <rect x="0" y="312" rx="0" ry="0" width="300" height="42" />
    </ContentLoader>
  </article>
);

export default CardPlaceholder;
