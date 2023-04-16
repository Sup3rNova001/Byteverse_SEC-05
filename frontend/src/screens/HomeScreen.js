import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import { listRecProducts } from "../actions/recproductActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const recproductList = useSelector((state) => state.recproductList);
  const { rloading, rerror, recproducts } = recproductList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  useEffect(() => {
    dispatch(listRecProducts(userInfo));
  }, [dispatch, userInfo]);
  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      {userInfo ? (
        <>
          <h1>Recommended Products</h1>
          {rloading ? (
            <Loader />
          ) : rerror ? (
            <Message variant="danger">{rerror}</Message>
          ) : (
            <>
              <Row>
                {recproducts ? (
                  recproducts.map((recproduct) => (
                    <Col key={recproduct._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={recproduct} />
                    </Col>
                  ))
                ) : (
                  <Message>No recommended products yet</Message>
                )}
              </Row>
            </>
          )}
        </>
      ) : (
        <Message>
          Please <Link to="/login">sign in</Link> to View Recommended Products{" "}
        </Message>
      )}

      <h1>Our Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
