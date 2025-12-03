import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router";

const Box = styled.form`
    display: flex;
    gap: 10px;
    width: 100%;
`;

const Input = styled.input`
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
`;

const Button = styled.button`
    padding: 12px 18px;
    border: none;
    background: black;
    color: white;
    border-radius: 8px;
    cursor: pointer;
`;

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    return (
        <Box
            onSubmit={e => {
                e.preventDefault();
                navigate(`/search?q=${encodeURIComponent(query)}`, { replace: true });
            }}>
            <Input
                placeholder="책 제목, 저자 등 검색"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <Button
                onClick={() =>
                    navigate(`/search?q=${encodeURIComponent(query)}`, { replace: true })
                }>
                검색
            </Button>
        </Box>
    );
}
