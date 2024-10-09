import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";

const CachorroDoDia = () => {
  const [imgCachorro, setImgCachorro] = useState("");
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(true);
  
  const buscaImgCachorroFetch = () => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((apiData) => {
        setImgCachorro(apiData.message);
        setLoading(false);
      });
  };

  const buscaImgCachorroAxios = () => {
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
        //console.log(response.data.message);
        setImgCachorro(response.data.message);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }


  useEffect(() => {
    buscaImgCachorroAxios();
  }, [update]);

  return (
    <>
      <Container className="mt-5 p-5">
        <Row className="align-items-center mb-4 sticky-top">
          <Col>
            <h1>Cachorro do Dia</h1>
          </Col>
          <Col xs="auto">
            <Button variant="secondary" onClick={() => setUpdate(!update)}>
              Atualizar
            </Button>
          </Col>
        </Row>
        <Row>
            {
                loading ?
                <Spinner animation="border" /> :
                <Image 
                  fluid alt="Cachorro do dia" 
                  src={imgCachorro}
                  className="mb4 shadow-lg"
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    maxHeight: "calc(100vh - 300px)"
                  }}
                />
            }
        </Row>
      </Container>
    </>
  );
};

export default CachorroDoDia;
