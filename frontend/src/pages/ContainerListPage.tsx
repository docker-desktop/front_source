import Container from "../components/Container";

import ContainerList from "../components/container/ContainerList";

const ContainerListPage = () => {
  return (
    <Container>
      <header className="w-full border mb-2 p-2">
        Search Bar
      </header>
      <ContainerList />
    </Container>
  );
};

export default ContainerListPage;
