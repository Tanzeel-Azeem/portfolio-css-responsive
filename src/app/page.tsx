import React from 'react'
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Home = () => {
  return (
    <div>
      {/* ------------Header start from here---------- */}
      <header>
        <div className='logo'>          {/* div for logo*/}
          <span>Port<span>Folio</span> .</span>
        </div>
        <div >           {/*div for nav bar */}
          <ul className='ul'>
            <Link href="#house">   <li id='home'>Home</li> </Link>
            <Link href="#project">  <li>Projects</li> </Link>
            <Link href="#about"> <li>About</li> </Link>
            <Link href="#contact"> <li>Contact</li></Link>
          </ul>
        </div>
        <div className='menu-icon'>
          <Sheet>
            <SheetTrigger>
              <AlignJustify />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle id='nav'>Nav Bar</SheetTitle>
                <SheetDescription>
                  <ul className='menu-items'>
                    <Link href="#house">   <li id='home'>Home</li> </Link>
                    <Link href="#project">  <li>Projects</li> </Link>
                    <Link href="#about"> <li>About</li> </Link>
                    <Link href="#contact"> <li>Contact</li></Link>


                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>


      {/* ------------Header endss here---------- */}
      <div id='house' className='parent-hero'>  {/*Parent div for hero section */}

        <div className='hero-text'>                       {/* text for hero section*/}
          <h1>Hey! {`I'm`} <br /> <span id='name'>Tanzeel</span></h1>
          <p>{`I'm`} a <span>Front-End Developer</span>  and Ready to transform your <span>Dreams</span>  into <span>Reality !</span></p>
          <span><Link href='#about'><button className='btn-hero'>Learn More</button></Link></span>
          <span id='project'><Link href='#contact'><button className='btn-hero'>Contact Me</button></Link></span>        </div>

        <div>                   {/*Image div */}
          <Image
            className='hero-image'
            src={'/pic.jpg'}
            alt='My Picture'
            width={300}
            height={300} />
        </div>
      </div>

      {/* ============hero section ends=============== */}

      {/* ============project section starts from here=============== */}

      <div className='parent-project'>   {/*parent div for project */}
        <span>My Projects</span>
      </div>

      {/* ==========cards======== */}
      <div className='cards-container'>
        <div className="cards">
          <Image
            id='c1'
            src={'/portfolio.png'}
            alt='project'
            height={100}
            width={350} />
          <div>
            <p>Made a Responsive Portfolio in Tailwind CSS</p>
            <span><a href="https://portfolio-tailwind-responsive-69.vercel.app/ " target='_blank'><button className='btn'>click me</button></a></span>
          </div>
        </div>
        <div className="cards">
          <Image
            id='c2'
            src={'/resume1.png'}
            alt='project'
            height={100}
            width={350} />
          <div>
            <p>Made my Resume through core HTML and CSS</p>
            <span><a href="https://resume-m1.vercel.app/" target='_blank'><button className='btn'>click me</button></a></span>
          </div>
        </div>
        <div className="cards">
          <Image
            id='c3'
            src={'/rivo.png'}
            alt='project'
            height={100}
            width={350} />
          <div>
            <p>Made a responsive Website about Clothes</p>
            <span id='about'><a href="https://rivo-69.vercel.app/" target='_blank'><button className='btn'>click me</button></a></span>
          </div>
        </div>
      </div>





      <div className='parent-about'>                           {/*about section parent div */}
        <div className="heading"><span className='heading-for-all'>About Me</span></div>
        <div className='about-text'>
          Lorem <span>ipsum</span> dolor sit, amet consectetur <span>adipisicing</span> elit. Officia eaque vitae, doloribus placeat <span>exercitationem</span> amet quae aspernatur illo perspiciatis, ut cum. Suscipit maiores <span>minus</span>, impedit <span>exercitationem</span> nesciunt sunt rem ipsa.
        </div>
      </div>

      {/* ==============COntact section ========== */}

      <div id='contact' className='parent-project'>   {/*parent div for contact */}
        <span>Contact Me</span>
      </div>
      <div className='form-container'>
        <div className='form'>
          <form action="">
            <label htmlFor="Name">Name</label><br />
            <input type="text" />
          </form>
          <form action="">
            <label htmlFor="email">Email</label><br />
            <input type="email" />
          </form>
          <form action="">
            <legend>Your Message</legend>
            <textarea rows={5} cols={40} name="" id=""></textarea>
          </form>
          <form action="">
            <input className='submit-btn' type="submit" name="" id="" />
          </form>
        </div>

      </div>
      <div className="footer">
        <p> All rights reserved.</p>

      </div>

    </div>
  )
}

export default Home
