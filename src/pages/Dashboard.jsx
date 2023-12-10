import { Card, CardGroup, Container } from "react-bootstrap";
import NavBar from "../components/Navbar";
import avater from "../assets/avater.jpg";
// import { addCourse } from "../redux/user";
import { useGetCoursesQuery } from "../services/course";
import { NavLink } from "react-router-dom";

function Dashboard() {
  // const dispatch = useDispatch();
  const { data: courses } = useGetCoursesQuery();

  return (
    <>
      <NavBar />
      <Container>
        <CardGroup className="gap-2">
          {courses?.map((course) => (
            <Card key={course?._id}>
              <Card.Img variant="top" src={avater} />
              <Card.Body>
                <Card.Title>{course?.title}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  corrupti itaque tempore aliquam illo cumque est error tempora,
                  quos ut nesciunt inventore odit suscipit sed quae mollitia hic
                  dolore repudiandae quo porro! Deserunt doloribus tenetur sunt
                  sequi odit placeat, sed cupiditate enim, nesciunt dignissimos
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <NavLink to={`/view/${course._id}`} style={{ backgroundColor: "orange",textDecoration:"none" }}>
                  <h3>View course</h3>
                </NavLink>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </Container>
    </>
  );
}

export default Dashboard;
