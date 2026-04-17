import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./SearchBar.module.css"; // CSS Module import

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onSearch = (event: FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();
        if (!query.trim()) return; // 빈 검색어 방지 (선택사항)
        navigate(`/search?q=${encodeURIComponent(query)}`, { replace: true });
    };

    return (
        <form className={styles.box} onSubmit={onSearch}>
            <input
                className={styles.input}
                placeholder="책 제목, 저자 등 검색"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button type="submit" className={styles.button}>
                검색
            </button>
        </form>
    );
}
