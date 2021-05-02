import React from 'react';
import {IconContext} from 'react-icons';
import {AiOutlineHome} from 'react-icons/ai';

function HomeIcon() {
    return (
      <IconContext.Provider
        value={{ color: 'white' }}
      >
        <div>
          <AiOutlineHome />
        </div>
      </IconContext.Provider>
    );
  }

  export default HomeIcon;