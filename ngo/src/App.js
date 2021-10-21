import Navbar from './Navbar'
import {Video} from './Video/Video.js'
import temp from './assets/Seoul.mp4';
function App() {
  return (
    <main id='home'>
      <Navbar />
      <section className='home'>
        <Video width="100%" height="100%" autoPlay="autoPlay" muted loop>
            <source src={temp} type='video/mp4' />
        </Video>
      </section>
      <section className='about' id='about'>
        <h1>about</h1>
      </section>
      <section className='projects' id='projects'>
        <h1>projects</h1>
      </section>
      <section className='contact' id='contact'>
        <h1>contact</h1>
      </section>
    </main>
  )
}

export default App