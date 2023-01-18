export type Works = {
    links: Links
    size: number
    entries: Entry[]
}

export type Links = {
    self: string
    author: string
    next: string
}

export type Entry = {
    type: BookType
    title: string
    authors: Array<BookAuthor>
    key: string
    latest_revision: number
    revision: number
    created: BookDate
    last_modified: BookDate
}

export type BookType = {
    key: string
}

export type BookAuthor = {
    author: { key: string }
    type: { key: string }
}

export type BookDate = {
    type: string
    value: Date
}