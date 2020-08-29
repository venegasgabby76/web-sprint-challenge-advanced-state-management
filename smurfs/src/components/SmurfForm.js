import React, { useState } from "react";
import { connect } from 'react-redux';
import { addSmurfs } from "../actions/actions"


const SmurfForm = props => {
    const [addNewSmurfs, setNewSmurfs] = useState({
        name: "",
        age: "",
        height: "",
    })

    const handleSmurfs = (e) => {
        setNewSmurfs({
            ...addNewSmurfs,
            [e.target.name]: e.target.value
        })

        const submitSmurfs = (e) => {
            e.preventDefault();
            props.addSmurfs(addNewSmurfs)
        }


        return (
            <form onSubmit={submitSmurfs}>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={addNewSmurfs.name}
                    onChange={handleSmurfs}
                />
                <br />

                <label>Age: </label>
                <input
                    type="text"
                    name="age"
                    value={addNewSmurfs.age}
                    onChange={handleSmurfs}
                />
                <br />

                <label>Height: </label>
                <input
                    type="text"
                    name="height"
                    value={addNewSmurfs.height}
                    onChange={handleSmurfs}
                />
                <br />
                <button>LETS ADD YOUR SMURFS</button>
            </form>
        )

    }
}

const mapStateToProps = state => {
    return {
        // isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, {addSmurfs})(SmurfForm);