export interface Movie{
    id: number;
    title: string;
    description: string;
    year: string;
    duration?: number;
    director?: string;
    posterURL: string;
    rating?: number;
}