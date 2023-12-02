import { Button, Card, CardGroup, Container } from "react-bootstrap";
import NavBar from "../components/Navbar";
import avater from "../assets/avater.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addCourse } from "../redux/user";

function Dashboard() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const { user } = useSelector((state) => state.users);

  console.log(user);

  return (
    <>
      <NavBar />
      <Container>
        <CardGroup className="gap-2">
          {courses.map((course) => (
            <Card key={course.id}>
              <Card.Img variant="top" src={avater} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  corrupti itaque tempore aliquam illo cumque est error tempora,
                  quos ut nesciunt inventore odit suscipit sed quae mollitia hic
                  dolore repudiandae quo porro! Deserunt doloribus tenetur sunt
                  sequi odit placeat, sed cupiditate enim, nesciunt dignissimos
                  doloremque nihil id exercitationem error aliquid minus maxime
                  deleniti eius ad iste omnis. Commodi voluptas explicabo
                  corporis maxime? Dolore consequatur est soluta, illum
                  temporibus mollitia necessitatibus doloremque iure explicabo
                  dicta voluptate itaque eos tempore dolores fugit ipsum autem
                  unde quibusdam fuga? Nostrum architecto accusantium inventore
                  enim, assumenda sapiente aspernatur quidem saepe harum aliquid
                  necessitatibus ab. Corporis.
                </Card.Text>
                <Button
                  className="border-0"
                  style={{ backgroundColor: "orange" }}
                  onClick={() =>
                    dispatch(addCourse({ email: user.email, courses: course }))
                  }
                >
                  Enroll
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </Container>
    </>
  );
}

export default Dashboard;
