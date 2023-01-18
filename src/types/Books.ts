import { BookDate } from "./Works"

export type Books = {
    description: string
    links: Array<BookLink>
    title: string
    covers: Map<number, number>
    subject_places: Map<number, string>
    subjects: Map<number, string>
    subject_people: Map<number, string>
    key: string
    authors: Map<number, Author>
    subject_times: Map<number, string>
    type: { key: string }
    latest_revision: number
    revision: number
    created: BookDate
    last_modified: BookDate
}

export type BookLink = {
    url: string
    title: string
    type: { key: string }
}

export type Author = {
    author: { key: string }
    type: { key: string }
}