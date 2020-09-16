import React from 'react';

import LinearLayout from './LinearLayout.jsx';

const layouts = {
    Linear: function(props) {
        return <LinearLayout {...props} />;
    }
}


export default (
    layouts.Linear,
);


