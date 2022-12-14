import React from "react";
import NewsModal from "./NewsModal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../style/newsCard.css";
class NewsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      dataOfNews: {},
    };
  }

  showModalFunction = (headline) => {
    const dataOfNewsOfModal = this.props.newsArray.find(
      (news) => news.headline === headline
    );
    this.setState({
      showModal: true,
      dataOfNews: dataOfNewsOfModal,
    });
  };
  closeModalFunction = () => {
    this.setState({
      showModal: false,
    });
  };
  render() {
    return (
      <>
        <div style={{ width: "90%", margin: "auto" }}>
          <Row xs={1} md={3} className="g-4">
            {this.props.newsArray.slice(11, 32).map((item) => {
              return (
                <Col>
                  <Card className="c" style={{ width: "90%", height: "480px" }}>
                    <Card.Img variant="top" src={item.image} alt="" />
                    <Card.Body>
                      <Card.Title style={{ color: "black" }}>
                        {item.headline}
                      </Card.Title>
                      <Card.Text style={{ color: "black" }}>
                        <p>Source :{item.source}</p>
                        <p>Date:{item.date}</p>
                      </Card.Text>
                      <Button
                        onClick={() => this.showModalFunction(item.headline)}
                        variant="primary"
                        type="submit"
                      >
                        Show More...
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>

        <NewsModal
          showModal={this.state.showModal}
          closeModalFunction={this.closeModalFunction}
          dataOfNews={this.state.dataOfNews}
        />
      </>
    );
  }
}

export default NewsCard;
