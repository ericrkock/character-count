import React from 'react';

class Settings extends React.Component {
   render() {
      return (
         <div className="count-settings">
            <p>Settings :</p>
            <input id="max-words" type="text" value="0" placeholder="Max. Words" />
            <label className="limited"><input type="checkbox" /> Limited to Max words?</label>
            <input className="kw-count" type="text" placeholder="keyword to count" />
         </div>
      );
   }
}

export default Settings;