import SearchBar from "../components/SearchBar";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.wrap}>
            <h2>Google Books 검색</h2>
            <SearchBar />
        </div>
    );
}
