import { Button, Card, CardGroup, Container } from "react-bootstrap";
import NavBar from "../components/Navbar";
import avater from "../assets/avater.jpg";
import { useSelector } from "react-redux";
import { useDeleteCourseMutation } from "../services/course";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user } = useSelector((state) => state.users);
  const [ deleteCourse ] = useDeleteCourseMutation();
  const navigate = useNavigate();

  function removeCourse(id){
    console.log(id);

    try {
      deleteCourse({
        courseId: id,
        id: user?._id,
      })
      .then((res) => {
        if (res.data) {
            alert("Course removed");
          } else {
            alert("An error occured please try again later");
            return;
          }
      })
      .catch(error => console.error(error))
    } catch(error){
      console.error("An error occured please try again later");
      return;
    }

  }

  return (
    <div>
      <NavBar />
      <Container>
        <h1>My courses</h1>
        <CardGroup className="gap-2">
          {user?.courses.map((course,id) => (
            <Card key={id}>
              <Card.Img variant="top" src={avater} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  corrupti itaque tempore aliquam illo cumque est error tempora,
                  quos ut nesciunt inventore odit suscipit sed quae mollitia hic
                </Card.Text>
                <div className="d-flex justify-content-center align-items-center">
                  <Button
                  className="border-0"
                  style={{ backgroundColor: "orange" }}
                  onClick={() => navigate(`/course/${course._id}`)}
                >
                  View course
                </Button>
                <Button
                  onClick={() => removeCourse(course._id)}
                  className="border-0"
                  style={{ backgroundColor: "red" }}
                >
                  Remove course
                </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </Container>
    </div>
  );
}

export default Profile;
