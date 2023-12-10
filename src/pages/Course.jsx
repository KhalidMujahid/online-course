import { useState } from "react";
import NavBar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import { useGetSingleCourseQuery } from "../services/course";
import { useParams } from "react-router-dom";

function Course(){
	const [count, setCount] = useState(0);
	const [progress, setProgress] = useState(0);
	const { id } = useParams();
	const { data, isLoading } = useGetSingleCourseQuery(id);

	 const timeUpdate = (event) => {
        setCount(prev => prev + 1);
        setProgress(count);
    }

    if (isLoading) return <h1>Loading.....</h1>;

	return (
		<div>
			<NavBar />
			<video controls width="100%" onTimeUpdate={timeUpdate}>
               <source src={data?.vidLink} type="video/mp4" />
               Sorry, your browser doesn't support videos.
             </video>
             <br />
             <br />
             <p>Progress bar:</p>
             <ProgressBar progress={progress}/>
		</div>
	);
}

export default Course;