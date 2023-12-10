import NavBar from "../components/Navbar";
import { useGetSingleCourseQuery } from "../services/course";
import { useParams } from "react-router-dom";

function Course(){
	const { id } = useParams();
	const { data } = useGetSingleCourseQuery(id);

	console.log(data);

	return (
		<div>
			<NavBar />
			<video src={data?.vidLink}></video>
		</div>
	);
}

export default Course;