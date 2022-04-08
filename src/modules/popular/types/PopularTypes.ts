export interface LatestPost {
  id: number
  text: string
  commentsCount: number
}

export interface Post {
  id: number
  date: string
  title: string
  subtitle: string
  img: string
  likesCount: number
  user: string
}