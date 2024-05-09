import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#a830bd', '#8f5b7e', '#000000', '#441e45', '#6b2d70']}
      />
    </div>
  );
};

export default Loader;
