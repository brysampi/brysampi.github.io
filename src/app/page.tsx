import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="midSection flex justify-center">
        <div className="midSection_card">
          {/* Info */}
          <section>
            <div className="highlight text-[40px] font-bold">John Bryan Sampiano</div>
            <div className="highlight-sub">but you can call me <span className="highlight">BELL</span></div>
            <div className="highlight mt-5 mb-5 text-xl">Web Developer</div>
            <div className="highlight-sub">As a web developer, building digital experiences is very close to my heart.</div>
          </section>
          {/* About */}
          <section>
            <p className="pb-1"><span>ABOUT</span></p>
            <p className="pt-2 pb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente excepturi, provident consectetur suscipit tenetur accusantium cumque animi aliquid, culpa non minima perferendis expedita nobis dicta. Aspernatur a eaque provident labore.</p>
            <p className="pt-2 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sunt, soluta possimus placeat consectetur non corporis totam iure aperiam exercitationem officia maxime adipisci? In, alias impedit? Totam nesciunt voluptatibus consequatur.</p>
            <p className="pt-2 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor aliquam, quasi nobis accusamus, molestias inventore veniam voluptatem quisquam explicabo consectetur! Saepe similique delectus nostrum. Asperiores aut hic nam recusandae!</p>
          </section>
        </div>
      </div>
    </main>
  )
}
