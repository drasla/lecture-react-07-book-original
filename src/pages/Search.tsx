import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import type { SearchResult, BookItem } from "../types";
import styles from "./Search.module.css"; // CSS Module import

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export default function Search() {
    const [params] = useSearchParams();
    const q = params.get("q") || "";
    const [books, setBooks] = useState<BookItem[]>([]);

    useEffect(() => {
        if (!q) return;
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=20&key=${API_KEY}`)
            .then(res => res.json())
            .then((data: SearchResult) => setBooks(data.items || []))
            .catch(() => setBooks([]));
    }, [q]);

    const getCover = (item: BookItem) =>
        item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/60x90?text=No+Cover";

    return (
        <div className={styles.wrap}>
            <h3>검색 결과: {q}</h3>

            {books.map(b => (
                <Link key={b.id} to={`/detail/${b.id}`} className={styles.item}>
                    <img src={getCover(b)} alt={b.volumeInfo.title} className={styles.cover} />
                    <div>
                        <div className={styles.title}>{b.volumeInfo.title}</div>
                        <div className={styles.authors}>{b.volumeInfo.authors?.join(", ")}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
