import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useGetSingleCourseQuery,
  useUpdateCourseMutation,
} from "../services/course";
import { Button,Container } from "react-bootstrap";
import NavBar from "../components/Navbar";

function View() {
  const { id } = useParams();
  const { user } = useSelector((state) => state.users);
  const [updateCourse, { isLoading }] = useUpdateCourseMutation();
  const { data: course, isLoading: courseLoading } = useGetSingleCourseQuery(id);

  function addCourse(val) {
    try {
      updateCourse({ userId: user._id, courseId: val })
        .then((res) => {
          if (res.data) {
            alert("Course added!");
          } else {
            alert("An error occured!");
          }
        })
        .catch((error) => console.error(error));
    } catch (e) {
      console.error(e);
    }
  }

  console.log(course);

  if (courseLoading) return <h1>Loading.....</h1>;

  return (
    <>
    <NavBar />
    <Container>
      <div className="d-flex justify-content-between">
         <div>
           <img width="200" height="200" src={course?.authorAvater} alt={course?.author} />
           <p className="bold">Tutor: {course?.author}</p>
         </div>
         <div>
           <Button
        className="border-0"
        style={{ backgroundColor: "orange" }}
        onClick={() => addCourse(id)}
      >
        {isLoading ? <>Enrolling...</> : <>Enroll</>}
      </Button>
         </div>
      </div>
       <div className="mt-5">
         <h1 className="text-uppercase">{course?.descriptions}</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  corrupti itaque tempore aliquam illo cumque est error tempora,
                  quos ut nesciunt inventore odit suscipit sed quae mollitia hic
                  dolore repudiandae quo porro! Deserunt doloribus tenetur sunt
                  sequi odit placeat, sed cupiditate enim, nesciunt dignissimos
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  corrupti itaque tempore aliquam illo cumque est error tempora,
                  quos ut nesciunt inventore odit suscipit sed quae mollitia hic
                  dolore repudiandae quo porro! Deserunt doloribus tenetur sunt
                  sequi odit placeat, sed cupiditate enim, nesciunt dignissimosLorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  corrupti itaque tempore aliquam illo cumque est error tempora,
                  quos ut nesciunt inventore odit suscipit sed quae mollitia hic
                  dolore repudiandae quo porro! Deserunt doloribus tenetur sunt
                  sequi odit placeat, sed cupiditate enim, nesciunt dignissimosLorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  corrupti itaque tempore aliquam illo cumque est error tempora,
                  quos ut nesciunt inventore odit suscipit sed quae mollitia hic
                  dolore repudiandae quo porro! Deserunt doloribus tenetur sunt
                  sequi odit placeat, sed cupiditate enim, nesciunt dignissimosLorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  corrupti itaque tempore aliquam illo cumque est error tempora,
                  quos ut nesciunt inventore odit suscipit sed quae mollitia hic
                  dolore repudiandae quo porro! Deserunt doloribus tenetur sunt
                  sequi odit placeat, sed cupiditate enim, nesciunt dignissimos</p>
       </div>
    </Container>
    </>
  );
}

export default View;
