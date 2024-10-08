export interface Comment {
  id: string
  avatar: string
  username: string
  text: string
  score: number
  createdAt: string
  replies: Comment[]
}

export interface Props {
  items: Comment[]
  form: Comment
  setForm: React.Dispatch<React.SetStateAction<Comment>>
}
