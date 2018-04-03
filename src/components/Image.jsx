import React from "react";

const Image = ({ src }) => {
  const style = { backgroundImage: `url(${src}` };

  return <div className="image" style={style} />;
};

export default Image;