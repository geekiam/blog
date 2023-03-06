export type Post = {
    title: string
    body: Object[]
    summary: string
    description: string
    _path: string
    featureImage: FeatureImage
    publishDate: string
    author: Author

}

export type FeatureImage = {
    url: string
    title: string
}

export type Author ={
    name: string
    github: string
    imageUrl: string
}