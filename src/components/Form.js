import React from 'react';

const Form = () => {
    return ( 
        <form>
            <div>
                <label>Brand</label>
                <select>
                    <option value="">-- Select --</option>
                    <option value="american">American</option>
                    <option value="asian">Asian</option>
                    <option value="european">European</option>
                    
                </select>
            </div>

        </form>
 );
}
 
export default Form;
