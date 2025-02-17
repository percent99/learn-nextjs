import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Not Found",
}

export default function NotFound() {
  return (
    <div>
      <h1>페이지 없음.</h1>
    </div>
  )
}