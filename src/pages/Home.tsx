import styled from "styled-components";
import SearchBar from "../components/SearchBar";

const Wrap = styled.div`
    padding: 40px;
`;

export default function Home() {
    return (
        <Wrap>
            <h2>Google Books 검색</h2>
            <SearchBar />
        </Wrap>
    );
}