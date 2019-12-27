import React from 'react';
import {Input, Button} from "../ui-kit";
import './styles.css';

export const EditPanel = () => {

    return (
        <form className="form">
            <header className="form__header">
                <h3 className="form__title">Edit customer</h3>
            </header>

            <div className="form__body">
                <div className="form__row">
                    <Input
                        label={'First name: '}
                        name="firstname"/>
                </div>
                <div className="form__row">
                    <Input
                        label={'Last name: '}
                        name="lastname"/>
                </div>
            </div>
            <Button
                mix="btn_primary btn_md">
                Submit
            </Button>
        </form>
    );
};

EditPanel.defaultProps = {};

EditPanel.propTypes = {};