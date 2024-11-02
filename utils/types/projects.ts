export interface ProjectInterface {
    id: number,
    name: string,
    description: string,
    image: string,
    url: string,
    technologies: string[],
    type: string
    client: string,
    media: Media[]
}
interface Media {
    id: number,
    original_url: string
}
