import React from "react";
import "./ComiteCard.css";
import blankProfilePicture from "../../../images/blank-profile-picture.png";
import emailIcon from "../../../images/email.png";

const ComiteCard = (props) => {
    return (
        <div>
            <div className="profile-card">
                <div className="profile-card-header">
                    <img
                        className="profile-picture"
                        src={blankProfilePicture}
                        alt="Blank Profile"
                    />
                </div>
                <div className="profile-card-body">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="profile-card-footer">
                    <a
                        className="email-icon-container"
                        href={"mailto:" + props.email}
                        title={"Envoyer un email à " + props.name}
                    >
                        <img className="email-icon" src={emailIcon} alt="Email" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ComiteCard;
