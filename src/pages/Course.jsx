import NavBar from "../components/Navbar";
import { useGetSingleCourseQuery } from "../services/course";
import { useParams } from "react-router-dom";

function Course(){
	const { id } = useParams();
	const { data, isLoading } = useGetSingleCourseQuery(id);

	console.log(data);

  if (isLoading) return <h1>Loading.....</h1>;

	return (
		<div>
			<NavBar />
			<video controls width="100%">
               <source src={data?.vidLink} type="video/mp4" />
               Sorry, your browser doesn't support videos.
             </video>
		</div>
	);
}

export default Course;