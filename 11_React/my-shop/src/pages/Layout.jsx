import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import styled, { } from "styled-components";

// 스타일 확장(내가 원하는 스타일 지정)
// styled(Button)` 

// `;

function Layout() {
  return (
    <>
      {/* 헤더 영역: 상단 네비게이션 바*/}
        <header>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#">시장</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link>홈</Nav.Link>
                <Nav.Link>장바구니</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </header>

      {/* 자식 컴포넌트 렌더링 될 위치 */}
      <Outlet />


      <footer>
        <p className="py-5 mb-0 bg-dark text-white">
          &copy; KKH kh Kim. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Layout;