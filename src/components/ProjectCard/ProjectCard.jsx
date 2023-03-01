import React from "react";
import { AiOutlineEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Button } from "../../components";
import "./ProjectCard.scss";

const ProjectCard = ({ title, src, website, code }) => {
  return (
    <motion.div
      whileHover={{ scale: [1, 1.05] }}
      transition={{ duration: 0.3 }}
      className="card-container"
    >
      <div className="card-title">
        <h4>{title}</h4>
      </div>
      <div className="card-img-container">
        <img src={src} alt={title} />
      </div>
      <div className="card-btns">
        <Button className={"secondary"}>Detalles</Button>
        <div className="card-icons">
          <a href={website} target="_blank" rel="noreferrer">
            <AiOutlineEye size={30} />
          </a>
          <a href={code} target="_blank" rel="noreferrer">
            <AiFillGithub size={30} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
