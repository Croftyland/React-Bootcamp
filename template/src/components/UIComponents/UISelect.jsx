import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

export default class UISelect extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequared,
        onChange:PropTypes.func.isRequared
    };

    render() {
        const {id, name, value, onChange,labelText, children} = this.props;
        return(
            <div className="form-group">
                <label htmlFor={id}>{labelText}</label>;
                <select
                id={id}
                className="form-control"
                name={name}
                value={value}
                onChange={onChange}
                >
                    {children}
                </select>
            </div>
        );
    }
}