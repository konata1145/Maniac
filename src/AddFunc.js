import React from "react";
import styled from "styled-components"

const AddFunc = (props) =>{
return (
    <div>
        {props.countList && props.countList.map((item, i) => (
            <div key = {i}>
                <button id = {i}>
                    OOO
                </button>
            </div>
        ))}
    </div>
)
        }

export default AddFunc