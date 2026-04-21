import { useEffect, useState } from "react";
import styled from "styled-components";
import type { BookItem } from "../types";
import { useNavigate, useParams } from "react-router";

const Wrap = styled.div`
    padding: 30px;
`;

const Cover = styled.img`
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;
`;

const BackButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background: #f3f3f3;
    color: #333;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: #e0e0e0;
        border-color: #999;
    }
`;

export default function Detail() {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<BookItem | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) return;
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(res => res.json())
            .then((data: BookItem) => setBook(data))
            .catch(() => setBook(null));
    }, [id]);

    if (!book) return <Wrap>Loading...</Wrap>;

    const info = book.volumeInfo;
    const cover = info.imageLinks?.thumbnail || "https://via.placeholder.com/200x300?text=No+Cover";

    return (
        <Wrap>
            <BackButton onClick={() => navigate(-1)}>← 뒤로 가기</BackButton>
            <h2>{info.title}</h2>
            <Cover src={cover} alt={info.title} />
            <p>{info.authors?.join(", ")}</p>
            <p>{info.description || "설명 없음"}</p>
        </Wrap>
    );
}
