import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import "./EventTaskList.css";
import { Modal } from "react-bootstrap";
import IconWrapper from "../../components/ui/IconWrapper";
import ToolCardsWrap from "../../components/ui/ToolCardsWrap";

const initialTasks = [
  "Research Ceremony & Legal Needs",
  "Insure Your Engagement Ring",
  "Start Your Guest List",
  "Outline Your Budget",
  "Start Researching Wedding Venues",
  "Start Saving Notes and Ideas",
];

const EventTaskList = () => {
  const [tasks, setTasks] = useState(
    initialTasks.map((t) => ({ title: t, completed: false }))
  );
  const [newTask, setNewTask] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState("");

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { title: newTask, completed: false }]);
    setNewTask("");
  };

  return (
    <>
      <section className="task-list-page">
        <Container>
          <ToolCardsWrap />
          {/* Header */}
          <Row className="align-items-center mb-3 gap-lg-0 gap-3">
            <Col xl={5} lg={6}>
              <h2 className="pink-text">Our Event Guest list</h2>
            </Col>
            <Col xl={7} lg={6} className="text-end tlp-buttons">
              <Button variant="secondary" className="">
                All Tasks
              </Button>
              <Button variant="secondary" className="active ">
                Completed (3)
              </Button>
              <Button variant="secondary" className="">
                My Task
              </Button>
              <Button
                variant="secondary"
                className="btn-not-purple"
                onClick={handleOpen}
              >
                + Add A New Task
              </Button>
            </Col>
          </Row>

          <div className="tlp-filter-and-list rounded p-sm-3 p-2 pb-3 bg-light mb-lg-4">
            {/* Filters */}
            <Card className="mb-3 bg-white shadow-sm">
              <Card.Body>
                <Row>
                  <Col md={4}>
                    <Form.Label>Invitation type</Form.Label>
                    <Form.Select className="default-style">
                      <option>Filter Invites By...</option>
                    </Form.Select>
                  </Col>
                  <Col md={4}>
                    <Form.Label>RSVPs</Form.Label>
                    <Form.Select className="default-style">
                      <option>Filter Invites By...</option>
                    </Form.Select>
                  </Col>
                  <Col md={4}>
                    <Form.Label>Addresses</Form.Label>
                    <Form.Select className="default-style">
                      <option>Filter Invites By...</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Task Section */}
            <h5 className="mb-3">January 2020</h5>
            <Card>
              <Card.Body className="p-0">
                {tasks.map((task, index) => (
                  <div key={index} className="task-row shadow-sm">
                    <Form.Check
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(index)}
                      label={task.title}
                    />
                    <div className="task-meta">
                      <span>0 / 1</span>
                      <FaChevronRight />
                    </div>
                  </div>
                ))}

                {/* Add Task */}
                <div className="task-add shadow-sm">
                  <Form.Control
                    placeholder="Add a Task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="default-style"
                  />
                  <Form.Select className="default-style">
                    <option>Choose...</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </Form.Select>
                  <Button className="btn-purple" onClick={addTask}>
                    + ADD TASK
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </section>

      {/* popup modal for adding new task */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        backdrop="static"
        className="task-list-page"
      >
        <Modal.Body className="task-modal">
          <h5 className="mb-3 text-center">Add a new task</h5>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="What do you need to do?"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </Form.Group>

          <Button
            className={`${!taskName.trim() ? "" : "btn-purple"} w-100`}
            variant={!taskName.trim() ? "secondary" : ""}
            onClick={() => {
              if (!taskName.trim()) return;
              setTasks([...tasks, { title: taskName, completed: false }]);
              setTaskName("");
              handleClose();
            }}
            disabled={!taskName.trim() ? true : false}
          >
            ASSIGN
          </Button>
        </Modal.Body>
      </Modal>

      <IconWrapper />
    </>
  );
};

export default EventTaskList;
