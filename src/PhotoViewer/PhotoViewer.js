import React from "react";
import * as styles from "./PhotoViewer.module.scss";

export const PhotoViewer = ({imageUrl}) => (
    <section>
        <img src={imageUrl} alt="The selected photo"/>
    </section>
);