import { useEffect, useState } from "react";
import styled from "styled-components";
import type { SearchResult, BookItem } from "../types";
import { Link, useSearchParams } from "react-router";

const Wrap = styled.div`
    padding: 30px;
`;

const Item = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 8px;
    background: white;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    &:hover { background: #f3f3f3; }
`;

const Cover = styled.img`
  width: 60px;
  height: 90px;
  object-fit: cover;
  border-radius: 4px;
`;

export default function Search() {
    const [params] = useSearchParams();
    const q = params.get("q") || "";
    const [books, setBooks] = useState<BookItem[]>([]);

    useEffect(() => {
        if (!q) return;
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=20`)
            .then((res) => res.json())
            .then((data: SearchResult) => setBooks(data.items || []))
            .catch(() => setBooks([]));
    }, [q]);

    const getCover = (item: BookItem) =>
        item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/60x90?text=No+Cover";

    return (
        <Wrap>
            <h3>검색 결과: {q}</h3>

            {books.map((b) => (
                <Item key={b.id} to={`/detail/${b.id}`}>
                    <Cover src={getCover(b)} alt={b.volumeInfo.title} />
                    <div>
                        <div>{b.volumeInfo.title}</div>
                        <div style={{ fontSize: 12, color: "#555" }}>
                            {b.volumeInfo.authors?.join(", ")}
                        </div>
                    </div>
                </Item>
            ))}
        </Wrap>
    );
}