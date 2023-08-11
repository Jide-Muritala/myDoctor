import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Success = () => {
    const { store, actions } = useContext(Context);

	return (
			<div className="container">
                <h3>Payment successful </h3>
                <h4>You will receive an email confirmation shortly</h4>
                <h5>
                Thanks for your payment! We really appreciate your patronage of the myDoctor app
                <br />
                If you have any questions, please email &nbsp;
                <a href="mailto:info@mydoctor.com">info@mydoctor.com</a>.
                </h5>
            </div> 
	);
};
