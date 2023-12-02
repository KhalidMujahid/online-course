import { Button, Card, CardGroup, Container } from "react-bootstrap";
import NavBar from "../components/Navbar";
import avater from "../assets/avater.jpg";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.users);

  return (
    <div>
      <NavBar />
      <Container>
        <h1>My courses</h1>
        <CardGroup className="gap-2">
          {user?.courses.map((course) => (
            <Card key={course.id}>
              <Card.Img variant="top" src={avater} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  corrupti itaque tempore aliquam illo cumque est error tempora,
                  quos ut nesciunt inventore odit suscipit sed quae mollitia hic
                </Card.Text>
                <Button
                  className="border-0"
                  style={{ backgroundColor: "orange" }}
                >
                  View course
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </Container>
    </div>
  );
}

export default Profile;
