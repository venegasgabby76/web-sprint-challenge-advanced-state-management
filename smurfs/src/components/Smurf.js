import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { grabSmurfs } from "../actions/actions";


 const Smurf = props => {

    useEffect(() => {
        props.grabSmurfs();
    }, []);

    return (
        <div>
            
            <div className='smurfs'>
                    {props.smurfs.map( smurf => (
                        <div  className='smurf'key={smurf.id}>
                            <p>Name : {smurf.name}</p>
                            <p>Age: {smurf.age}</p>  
                            <p>Height: {smurf.height}</p>  
                            </div>
                    ))}

                </div>
         
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading, 
        smurfs: state.smurfs, 
        error: state.error
    }
}


export default connect(mapStateToProps, {grabSmurfs})(Smurf);