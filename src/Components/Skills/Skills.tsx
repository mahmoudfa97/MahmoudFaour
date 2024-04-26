import React from "react";
import ProgressBar from "./progressBar";

const Skills = () => {
  let firstRowSkills = [
    { name: "JavaScript", val: "90" },
    { name: "React", val: "90" },
    { name: "TypeScript", val: "90" },
    { name: "NodeJS", val: "90" },
  ];
  let secondRowSkills = [
    { name: "Redux", val: "90" },
    { name: "Hooks", val: "90" },
    { name: "Angular", val: "80" },
    { name: "Webpack", val: "90" },
  ];
  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6">
            {firstRowSkills.map((skill) => (
              <ProgressBar
                key={skill.name} 
                labelledby={skill.name} 
                valuenow={Number(skill.val)}/>
            ))}
          </div>

          <div className="col-lg-6">
          {secondRowSkills.map((skill) => (
              <ProgressBar
                key={skill.name} 
                labelledby={skill.name} 
                valuenow={Number(skill.val)}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
