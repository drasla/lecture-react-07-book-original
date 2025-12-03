export interface VolumeInfo {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
        thumbnail?: string;
        small?: string;
    };
}

export interface BookItem {
    id: string;
    volumeInfo: VolumeInfo;
}

export interface SearchResult {
    items: BookItem[];
}