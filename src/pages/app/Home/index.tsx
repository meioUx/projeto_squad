import { Header } from '../../../components/Header'
import { ProfileInfo } from '../../../components/ProfileInfo'
import headerBanner from "../../../assets/headerBanner.png"
import "./home.style.css"
import { useApp } from '../../../context/app'
import { useState } from 'react'

export function Home() {
  const { user } = useApp();
  const [posts, setPosts] = useState<string[]>([])

  function handleSubmitPost(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries()) as { textpost: string };

    const newPosts = posts
    newPosts.push(formJson.textpost)
    setPosts(newPosts)
  }

  return (
    <>
      <Header />
      <div className='containerHome'>
        <ProfileInfo />
        <div
          className='containerFeedHome'
        >
          <form method="post" onSubmit={handleSubmitPost} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }}>
            <textarea
              className='inputFeedHome'
              name='textpost'
            />
            <button className='buttonInputFeedHome'>Postar</button>

          </form>
          <div className='feedHome'>
            <img
              src={headerBanner}
              style={{
                width: "100%",
                objectFit: "contain",
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40
              }}
            />
            {posts.map((post, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  width: '100%',
                  minHeight: 50,
                  flexDirection: 'column',
                  margin: 10
                }}
              >
                <p>
                  {post}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

