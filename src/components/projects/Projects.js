import styles from './Projects.module.css';
import projectsData from '../../constants/projects';

const Projects = (props) => {
  return (
    <section className={styles.projects}>
      <h1 className={styles.heading}>
        {props.engLang ? 'Simple Self Projects' : 'Kendi Basit Projelerim'}
      </h1>

      <div className={styles.projectsContainer}>
        {projectsData.map((project) => (
          <div className={styles.card}>
            <div className={styles.info}>
              <h1 className={styles.title}>
                {props.engLang ? project.nameEN : project.nameTR}
              </h1>
              <p className={styles.text}>
                {props.engLang ? project.descEN : project.descTR}
              </p>
              <div className={styles.buttons}>
                <a
                  className={styles.button}
                  target='_blank'
                  rel='noreferrer'
                  href={project.link}
                >
                  {props.engLang ? 'Live demo' : 'Uygulamaya git'}
                  <p className={styles.arrow}>&gt;</p>
                </a>
                <a
                  className={styles.button}
                  target='_blank'
                  rel='noreferrer'
                  href={project.github}
                >
                  GitHub <p className={styles.arrow}>&gt;</p>
                </a>
              </div>
            </div>
            <div className={styles.img}>
              <img src={project.image} alt={project.nameEN} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
