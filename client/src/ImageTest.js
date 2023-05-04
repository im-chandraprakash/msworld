import React from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
// import { axiosClient  } from './utils/axiosClient';

function ImageTest() {

    const handleChange = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("photo", e.target.files[0]);


        console.log(formData);
     
    };

  return (
      <div>
          <form onSubmit={handleChange}>
              <label className="button" htmlFor="file_picker">
                  <AiFillPlusCircle />
                  <input
                      hidden
                      type="file"
                      name="file_picker"
                      id="file_picker"
                      onChange={(e) => handleChange(e)}
                  />
              </label>
            <input type="submit" onSubmit={handleChange}></input>
          </form>
      </div>
  );
}

export default ImageTest