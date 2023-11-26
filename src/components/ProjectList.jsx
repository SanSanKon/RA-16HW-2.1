import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line react/prop-types
const ProjectList = ({ projects }) => {
    
    return(
        <div className="img-wrapper">
            {projects.map((project) => 
                <img key={uuidv4()} src={project.img} />
            )}
        </div>
    )
}

export default ProjectList;