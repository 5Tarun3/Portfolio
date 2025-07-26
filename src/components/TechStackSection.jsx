import './SectionStyles.css';
import python from '../assets/tech/python.svg';
import c from '../assets/tech/c.svg';
import cpp from '../assets/tech/cpp.svg';
import html from '../assets/tech/html5.svg';
import css from '../assets/tech/css.svg';
import js from '../assets/tech/javascript.svg';
import java from '../assets/tech/java.png';
import r from '../assets/tech/r.svg';
import matlab from '../assets/tech/matlab.png';
import asm from '../assets/tech/assembly.svg';
import sql from '../assets/tech/sqlite.svg';
import mongodb from '../assets/tech/mongodb.svg';
import expressjs from '../assets/tech/express.svg';
import nodejs from '../assets/tech/nodedotjs.svg';
import reactIcon from '../assets/tech/react.svg';
import electronjs from '../assets/tech/electron.svg';
import axios from '../assets/tech/axios.svg';
import postman from '../assets/tech/postman.svg';
import numpy from '../assets/tech/numpy.svg';
import pandas from '../assets/tech/pandas.svg';
import tableau from '../assets/tech/tableau.png';
import tensorflow from '../assets/tech/tensorflow.svg';
import pytorch from '../assets/tech/pytorch.svg';
import opencv from '../assets/tech/opencv.svg';
import sklearn from '../assets/tech/scikitlearn.svg';
import socketio from '../assets/tech/socketdotio.svg';
import libgdx from '../assets/tech/libgdx.png';
import figma from '../assets/tech/figma.svg';
import linux from '../assets/tech/linux.svg';

const languages = [
  {name:"Python", icon:python}, {name:"C", icon:c}, {name:"C++", icon:cpp},
  {name:"HTML", icon:html}, {name:"CSS", icon:css}, {name:"JavaScript", icon:js},
  {name:"Java", icon:java}, {name:"R", icon:r}, {name:"Matlab", icon:matlab},
  {name:"Assembly", icon:asm}, {name:"SQLite", icon:sql}
];

const frameworks = [
  {name: "MongoDB", icon: mongodb},
  {name: "ExpressJS", icon: expressjs},
  {name: "NodeJS", icon: nodejs},
  {name: "React", icon: reactIcon},
  {name: "ElectronJS", icon: electronjs},
  {name: "Axios", icon: axios},
  {name: "Postman", icon: postman},
  {name: "Numpy", icon: numpy},
  {name: "Pandas", icon: pandas},
  {name: "Tableau", icon: tableau},
  {name: "Tensorflow", icon: tensorflow},
  {name: "pyTorch", icon: pytorch},
  {name: "OpenCV", icon: opencv},
  {name: "Sklearn", icon: sklearn},
  {name: "Socket.io", icon: socketio},
  {name: "LibGDX", icon: libgdx},
  {name: "Figma", icon: figma},
  {name: "Linux", icon: linux}
];

export default function TechStackSection() {
  return (
    <section className="section techstack-section" id="tech-stack">
      <h2>Tech Stack</h2>
      <div className="stack-category">
        <h4>Languages</h4>
        <div className="tech-icons">
          {languages.map((item, idx) =>
            <img src={item.icon} alt={item.name} title={item.name} key={idx} className="tech-icon" />
          )}
        </div>
      </div>
      <div className="stack-category">
        <h4>Frameworks & Technologies</h4>
        <div className="tech-icons">
          {frameworks.map((item, idx) =>
            <img src={item.icon} alt={item.name} title={item.name} key={idx} className="tech-icon" />
          )}
        </div>
      </div>
    </section>
  );
}
