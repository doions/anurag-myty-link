import Head from 'next/head'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Anurag Jain - Resume</title>
        <meta name="description" content="Anurag Jain's Resume" />
        <link rel="icon" href="/croodlesNeutral-1712043122554.ico" />
      </Head>

      <main>
        <h1>Anurag Jain</h1>
        <p>mindsarray@gmail.com | 8928399570</p>

        <h2>Objective</h2>
        <p>Dynamic and results-driven entrepreneur with a proven track record of success in building and scaling technology-driven businesses. Seeking a senior leadership position such as CXO where I can leverage my 20 years of experience and innovative mindset to drive organizational growth and profitability.</p>

        <h2>Education</h2>
        <p>Bachelor of Engineering in Computer Science and Engineering<br />
          Jabalpur Engineering College, Jabalpur<br />
          CGPA: 8.1/10<br />
          Year: 2004
    </p>
   

        <h2>Professional Experience</h2>
        <h3>Founder - SKOOLSOFT</h3>
        <p>Nov 2003 - Dec 2008<br />
          - Developed and deployed SKOOLSOFT, a school automation and parent connect platform, in prominent schools across Jabalpur, Mumbai, and Delhi.<br />
          - Streamlined administrative processes and improved communication between schools and parents, resulting in increased efficiency and satisfaction.</p>

        <h3>Founder & CEO, MindsArray Technologies Pvt Ltd (Known as Pay1)</h3>
        <p>Oct 2008 - Nov 2016<br />
          - Founded and spearheaded the growth of MindsArray Technologies Pvt Ltd, a leading technology company specializing in Education Automation, Fintech, and Supply Chain Innovation.<br />
          - Successfully developed and launched the flagship product Pay1, which gained widespread recognition and market adoption.<br />
          - Led a talented team of professionals to develop innovative solutions, drive business development initiatives, and ensure customer satisfaction.<br />
          - Secured strategic partnerships and alliances to expand market reach and enhance product offerings.</p>

        
        <h3>Founder & CEO, Doions Pvt Ltd</h3>
        <p>Nov 2019 - Dec 2022<br />
          - Established Doions Pvt Ltd to focus on developing cutting-edge products such as Myty and Lopu, catering to Web publishing using AI tools.<br />
          - Oversaw all aspects of the business, including product development, marketing, sales, and operations.<br />
          - Implemented effective growth strategies to position the company as a key player in Product Design, Hiring, and Market Study.</p>

        <h2>Hobbies</h2>
        <p>Travel, Photography, Conversation Therapy, Mental Health, Spirituality</p>

        <h2>Skills</h2>
        <ul>
          <li>Entrepreneurship</li>
          <li>Leadership and Team Management</li>
          <li>Product Development and Innovation</li>
          <li>Strategic Planning and Execution</li>
          <li>Business Development and Partnerships</li>
          <li>Financial Management</li>
          <li>Market Analysis and Trends</li>
          <li>Full Stack Development:
            <ul>
              <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
              <li>LAMP Stack (Linux, Apache, MySQL, PHP)</li>
              <li>Tools: Figma, VSCode, Postman, Git</li>
               <li>CICD Pipeline design, Agile methodologies, Jeera</li>
            </ul>
          </li>
          <li>Web Development (HTML, CSS, JavaScript)</li>
          <li>Mobile Development</li>
          <li>Design - Wireframe, UI/UX</li>
          <li>Data Science</li>
          <li>Machine Learning</li>
          <li>Blockchain</li>
          <li>Digital Media Marketing</li>
          <li>Market Analysis and Trends</li>
        </ul>
      </main>

      <footer>
        {/* Footer content, if needed */}
      </footer>
    </div>
  )
}
